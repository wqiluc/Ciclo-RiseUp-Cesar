const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./Nivel_2_JavaScript/2.3-Avançado-pre-FrameWork/projeto Hair Day/src/js/main.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      
      template: "./Nivel_2_JavaScript/2.3-Avançado-pre-FrameWork/projeto Hair Day/html/index.html",

      favicon: "./Nivel_2_JavaScript/2.3-Avançado-pre-FrameWork/projeto Hair Day/src/assets/scissors.svg"
    })
  ]
}