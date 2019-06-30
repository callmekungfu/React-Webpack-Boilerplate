const path = require('path');
const merge = require('webpack-merge');
const common = require('../webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('Building in Production');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve('../', 'docs'),
    publicPath: ''
  }
});