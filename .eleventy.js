module.exports = function (config) {

  let liquidJs = require("liquidjs");
  let options = {
    extname: ".liquid",
    dynamicPartials: true,
    strict_filters: true,
    root: ["_includes"]
  };

  config.setLibrary("liquid", liquidJs(options));
  
  config.addWatchTarget("./src/styles/");
  config.addWatchTarget("./src/images/");
  config.addWatchTarget("./src/scripts/");
  
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/scripts");
  
  return {
    dir: {
      input: 'src',
      output: "dist"
    },
    templateFormats: [
      'html',
      'md',
      'liquid'
    ],
    passthroughFileCopy: true
  }
}

