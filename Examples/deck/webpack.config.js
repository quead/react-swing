/**
 * @project react-swing
 * Created by quead
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
  devtool: '#inline-source-map',
  entry: {
    'bundle.js': ['./index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
};
