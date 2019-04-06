const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: ['css-loader', 'style-loader']
      }
    ]
  }
}
