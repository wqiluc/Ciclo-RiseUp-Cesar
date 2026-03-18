const path = require("path")

module.exports = {
  entry: "./Nivel_2_JavaScript/2.3-Avançado-pre-FrameWork/projeto Hair Day/src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devServer: {
    static: "./public"
  }
}