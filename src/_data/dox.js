const path = require('path');
const doxray = require('doxray');
const fs = require('fs');

const styleDir = './_remedy/';

module.exports = function() {
  const css = [];

  fs.readdir(styleDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const data = {};

      const filePath = path.join(styleDir, file);
      const docs = doxray([filePath]);

      data.info = docs.patterns.filter(doc => doc.meta)[0];
      data.patterns = docs.patterns.filter(doc => !doc.meta);

      css.push(data);
    });
  });

  return css;
};
