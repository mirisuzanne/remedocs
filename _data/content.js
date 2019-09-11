const fetch = require("node-fetch");
const flatcache = require("flat-cache");
const path = require("path");

function getCacheKey() {
  let date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}

module.exports = async function() {
  let cache = flatcache.load("content", path.resolve("./_datacache"));
  let key = getCacheKey();
  let cachedData = cache.getKey(key);
  if(!cachedData || !(cachedData.css)) {
    // GitHub API: https://developer.github.com/v3/repos/#get
    let newData = fetch("https://api.github.com/repos/mozdevs/cssremedy/contents/")
      .then(res => res.json()) // node-fetch option for JSON
      .then(json => {
        const allFiles = [];

        json.forEach(file => {
          const path = file.path.split('.');
          const type = path.pop();
          const getTypes = ['css', 'md'];

          if (getTypes.includes(type)) {
            let fileData = {
              path: file.path,
              name: path[0],
              url: file.download_url
            };

            if (!allFiles[type]) {
              allFiles[type] = [];
            }

            fetch(file.download_url)
              .then(res => res.text())
              .then(body => {
                fileData.body = body;
                allFiles[type].push(fileData);
              });
          }
        });

        return allFiles;
      });

    cache.setKey(key, newData);
    cache.save();
    return newData;
  }

  return cachedData;
};
