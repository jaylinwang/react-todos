const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist',
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devServer: {
    contentBase: './',
    port: 3000,
  },
};
