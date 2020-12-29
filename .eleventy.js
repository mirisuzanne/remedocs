const prism = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require("js-yaml");

const type = require('./_filters/type');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(prism);
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  // layouts
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('dox', 'layouts/dox.njk');

  // markdown
  eleventyConfig.setLibrary('md', type.mdown);
  eleventyConfig.addFilter('md', type.render);
  eleventyConfig.addFilter('mdInline', type.inline);
  eleventyConfig.addPairedShortcode('markdown', type.render);
  eleventyConfig.addPairedShortcode('markdownInline', type.inline);

  // assets
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  }
};
