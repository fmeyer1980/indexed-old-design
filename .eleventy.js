// const lazyImages = require("eleventy-plugin-lazyimages");
// const pluginRespimg = require( "eleventy-plugin-respimg" );
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

    // Layout aliases can make templates more portable
    // config.addLayoutAlias('default', 'layouts/default.njk');

    eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
    eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
    eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
    eleventyConfig.addPassthroughCopy("favicon.png");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // config.addPlugin(lazyImages, {
    //     cacheFile: ""
    // });

    if(process.env.ELEVENTY_ENV == 'prod') {
        config.addTransform("htmlmin", require("./src/utils/minify-html.js"));
    }

    return {
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        passthroughFileCopy: true,
        
        dir: {
            input: "src/site",
            output: "_dist",
            includes: "_includes"
        }
    }
}