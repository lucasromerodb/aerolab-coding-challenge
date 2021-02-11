var CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

var webpackConfig = {
  plugins: [new CaseSensitivePathsPlugin()],
};

module.exports = webpackConfig;
