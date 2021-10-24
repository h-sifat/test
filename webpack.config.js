const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    globalObject: "this",
    library: {
      name: "cv",
      type: "umd",
    },
  },
  externals: ["handy-types"],
};
