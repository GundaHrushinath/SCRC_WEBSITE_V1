module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data"
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
};