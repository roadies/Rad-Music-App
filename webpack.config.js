const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

const SRC_DIR = path.join(__dirname, '/client/src');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
  filename: './index.html',
});
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: '[name].js',
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin(envKeys),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
    ],
  },
};
