const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      // Comment out; not using style or css loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: { extensions: ["*", ".js", ".jsx"] },
  
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public/"),
      publicPath: "/"
    }
    // hot: true // Use HMR; true by default
  },
  
  plugins: [
    // Because "devServer" uses "hot: true" by default, HMR plug-in is added automatically
    // new webpack.HotModuleReplacementPlugin()
  ]
};