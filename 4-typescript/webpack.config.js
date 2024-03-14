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
    contentBase: './',    // webpack is served from here
    publicPath: '/dist/', // webpack output is served from here
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
