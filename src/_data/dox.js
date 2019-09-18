const path = require('path');
const doxray = require('doxray');
const fs = require('fs');

// relative path from the root directory of remedocs
// to the root directory of any package to be documented
const remeDir = '../cssremedy/';

// relative path from remeDir to CSS documents inside the project
const styleDir = path.join(remeDir, 'css/');

// probably not going to change…
const pkgJson = path.join(remeDir, 'package.json');

// define the documentation regex…
const doxOptions = {
  regex: {
    css: {
      opening: /^\/\*\s*@docs[^\n]*\n/m,
      closing: /\*\//,
      comment: /^\/\*\s*@docs[^*]*\*+(?:[^/*][^*]*\*+)*\//gm
    }
  }
};

module.exports = function() {
  const repo = {}
  const css = [];
  const md = [];

  // get the package
  fs.readFile(pkgJson, 'utf8', (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    Object.keys(json).forEach(key => {
      repo[key] = json[key];
    });
  });

  // get the styles
  fs.readdir(styleDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const data = {};

      const filePath = path.join(styleDir, file);
      const docs = doxray([filePath], doxOptions);

      data.info = docs.patterns.filter(pattern => pattern.category === 'file')[0];
      data.patterns = docs.patterns.filter(pattern => pattern.category !== 'file');

      css.push(data);
    });

    css.sort((a, b) => a.info.label > b.info.label);
  });

  // get any markdown
  fs.readdir(remeDir, (err, files) => {
    if (err) throw err;

    files
      .filter(file => file.endsWith('.md'))
      .forEach(file => {
        const data = {
          info: {
            filename: file,
            label: file.split('.')[0]
          }
        };

        const filePath = path.join(remeDir, file);
        fs.readFile(filePath, 'utf8', (err, txt) => {
          if (err) throw err;
          data.content = txt;
        });

        md.push(data);
      });

      md.sort((a, b) => a.info.label > b.info.label);
  });

  return {
    repo,
    css,
    md
  };
};
