const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = merge(common, {
  mode: "development",
  // watch: true,
  // optimization: {
  //   minimizer: [new OptimizeCSSAssetsPlugin({})],
  // },
  entry: {    
    app: "./src/js/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "local"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          }, 
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "local"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
  ],

});