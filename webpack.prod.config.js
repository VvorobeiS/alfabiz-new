const path = require('path');

module.exports = {
  entry: './assets/js/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/js')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
