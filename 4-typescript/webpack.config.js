const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.tsx",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin()],
};