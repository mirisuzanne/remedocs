const fetch = require("node-fetch");
const flatcache = require("flat-cache");
const path = require("path");
const fs = require("fs");

function getCacheKey() {
  const date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() +
    1}-${date.getUTCDate()}`;
}

module.exports = async function() {
  const cache = flatcache.load("repo", path.resolve("./_datacache"));
  const key = getCacheKey();
  const cachedData = cache.getKey(key);

  if (cachedData === undefined) {
    //  GitHub API: https://developer.github.com/v3/repos/#get
    const newData = await fetch(
      "https://api.github.com/repos/mozdevs/cssremedy"
    )
      .then(res => res.json()) // node-fetch option to transform to json
      .then(json => {
        // prune the data to return only what we want
        return {
          name: json.name,
          description: json.description,
          license: json.license,
          downloads: json.downloads_url
        };
      });
    cache.setKey(key, newData);
    cache.save();
    return newData;
  }
  return cachedData;
};
