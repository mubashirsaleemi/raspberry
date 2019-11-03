const path = require('path');

module.exports = {
  mode: 'development',
  entry: './lib/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './public/bundle.js'
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' }
    ]
  }
};
