const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    globalObject: "this",
    library: {
      name: "cv",
      type: "umd",
    },
  },
  externals: {
    "handy-types": {
      commonjs: "handy-types",
      commonjs2: "handy-types",
      amd: "handy-types",
    },
  },
};
