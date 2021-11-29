import * as path from 'path';
import * as webpack from 'webpack';
// import HtmlWebpackPlugin from ''
//   new ({
//       template: path.join(__dirname, "src", "index.html"),
//   }),
// ],

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
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          //options: "@babel/preset-react",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
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
  // plugins: [
  //   new HtmlWebpackPlugin({
  //       template: path.join(__dirname, "src", "index.html"),
  //   }),
  // ],
}

export default config;
