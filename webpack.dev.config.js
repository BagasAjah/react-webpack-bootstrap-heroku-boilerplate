var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './index.jsx' // Your appʼs entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loaders: ['react-hot', 'babel']},
    {test: /\.less$/,loader: 'style!css!less'},
    {test: /\.css$/,loader: 'style!css'},
    { test: /\.woff(2)?$/, loader: "url-loader" },
    { test: /\.(ttf|eot|svg)?$/, loader: "file-loader" }
    ]
  },
  devServer: {
      contentBase: "./client",
      noInfo: true, //  --no-info option
      hot: true,
      inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
