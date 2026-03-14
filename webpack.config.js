import path from "path";

export default {
  entry: "./user.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  watch: true
};
