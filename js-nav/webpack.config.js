const webpackMerge = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react")

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mifro",
    projectName: "nav",
    webpackConfigEnv,
  })

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      port: 8501,
    },
    externals: ["react", /^@mifro\/.+/],

    module: {
      rules: [
        {
          test: /\.css/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "nav__[local]--[hash:base64:5]",
                },
              },
            },
          ],
        },
      ],
    },
  })
}
