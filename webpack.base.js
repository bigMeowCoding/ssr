module.exports = {
  mode: "development",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
