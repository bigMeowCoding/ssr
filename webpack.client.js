const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
