const path = require('path');
const doxray = require('doxray');

const styleDir = './_remedy/';

async function fetchData(fileName) {
  const filePath = path.join(styleDir, fileName);
  return doxray([filePath]);
}
module.exports = async function() {
  const files = ['remedy.css', 'reminders.css'];

  return files.map(fileName => {
    const name = fileName.split('.')[0];
    const docs = fetchData(fileName);
    return {name, docs};
  });
};
