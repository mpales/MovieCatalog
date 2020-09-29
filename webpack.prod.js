const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          use: [
              {loader: "babel-loader", options:
              {presets: ["@babel/preset-env"]}}
          ],
          test: /\.(scss)$/,
          use: [
            {loader: MiniCssExtractPlugin.loader},
            {loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')]}
            }
          }, {loader: 'sass-loader'}]
        }
      ]
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        })
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({filename: "[name].css"}),
    ] 
})