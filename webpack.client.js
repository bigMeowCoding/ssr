const path = require("path");
const config = require("./webpack.base");
const { merge } = require("webpack-merge");
const clientConfig = {
  target: "web",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
};
module.exports = merge(config, clientConfig);
