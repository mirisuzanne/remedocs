const path = require('path');
const doxray = require('doxray');

const styleDir = './_remedy/';

module.exports = function() {
  const files = ['remedy.css', 'reminders.css'];

  return files.map(fileName => {
    const filePath = path.join(styleDir, fileName);
    const name = fileName.split('.')[0];
    const docs = doxray([filePath]);
    return {name, fileName, docs};
  });
};
