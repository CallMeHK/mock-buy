const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/main.tsx"),
  devtool: "inline-source-map",
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, "../dist-server/app")
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "./dist/app")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    }),
    new BundleAnalyzerPlugin()
  ]
};
