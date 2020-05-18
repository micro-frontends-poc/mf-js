module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
      https: true,
      host: "localhost",
      port: 8500,
    },
    externals: ["vue", "vue-router", /^@mifro\/.+/],
  },
  filenameHashing: false,
}
