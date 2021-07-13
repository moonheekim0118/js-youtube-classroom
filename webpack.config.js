const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.ts",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    open: true,
    port: 3000,
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /(\.css$)/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src/js"),
    },
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js", ".ts", ".json", ".css"],
  },
  target: "node",
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public/index.html"),
      inject: false,
    }),
  ],
};
