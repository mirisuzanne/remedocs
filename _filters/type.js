'use strict';

const mdown = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
});

const render = (content) => {
  return content ? mdown.render(content) : content;
};
const inline = (content) => {
  return content ? mdown.renderInline(content) : content;
};

module.exports = {
  mdown,
  render,
  inline,
};
