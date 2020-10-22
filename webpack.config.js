const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
