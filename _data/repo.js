const fetch = require("node-fetch");
const flatcache = require("flat-cache");
const path = require("path");

function getCacheKey() {
  let date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}

module.exports = async function() {
  let cache = flatcache.load("repo", path.resolve("./_datacache"));
  let key = getCacheKey();
  let cachedData = cache.getKey(key);

  if (!cachedData || !cachedData.name) {
    // GitHub API: https://developer.github.com/v3/repos/#get
    let newData = fetch("https://api.github.com/repos/mozdevs/cssremedy")
      .then(res => res.json()) // node-fetch option to transform to json
      .then(json => {
        // prune the data to return only what we want
        return {
          name: json.name,
          description: json.description,
          license: json.license,
          downloads: json.downloads_url,
        };
      });

    cache.setKey(key, newData);
    cache.save();
    return newData;
  }

  return cachedData;
};
