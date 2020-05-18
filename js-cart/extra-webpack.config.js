const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;
const webpackMerge = require("webpack-merge");

module.exports = (config) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config);

  return webpackMerge.smart(singleSpaWebpackConfig, {
    externals: ["zone.js"],
  });
};
