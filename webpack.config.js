var validate = require('webpack-validator');

var config = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/bundled/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src/',
        loader: 'babel'
      }
    ]
  }
};

module.exports = validate(config);
