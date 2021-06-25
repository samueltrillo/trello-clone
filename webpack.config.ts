import * as path from 'path';
import * as webpack from 'webpack';

// module.exports = {
//   entry: "./src/index.tsx",
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: ["ts-loader"],
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.tsx?$/,
//         use: {
//           loader: ["babel-loader"],
//           options: ["@babel/preset-react"],
//         },
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          //options: "@babel/preset-react",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}

export default config;
