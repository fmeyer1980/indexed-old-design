// const lazyImages = require("eleventy-plugin-lazyimages");
// const pluginRespimg = require( "eleventy-plugin-respimg" );
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {

    // Layout aliases can make templates more portable
    // config.addLayoutAlias('default', 'layouts/default.njk');

    config.addPassthroughCopy({ "src/assets/images": "assets/images" });
    config.addPassthroughCopy({ "src/assets/js": "assets/js" });
    config.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
    config.addPassthroughCopy({ "src/assets/css": "assets/css" });
    config.addPassthroughCopy("favicon.png");
    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(syntaxHighlight);
    
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