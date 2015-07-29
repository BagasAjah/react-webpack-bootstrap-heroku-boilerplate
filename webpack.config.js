var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.jsx',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    {test: /\.jsx?$/,exclude: /(node_modules|bower_components)/,loaders: ['babel']},
    {test: /\.less$/,loader: "style!css!less"}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
