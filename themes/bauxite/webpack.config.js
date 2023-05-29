const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      filename: "include.html",
      // template: "src/assets/test.html",
    }),
  ],

  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "static"),
  },

  module: {
    rules: [
      {
        // src/style.scss
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
    ],
  },
};
