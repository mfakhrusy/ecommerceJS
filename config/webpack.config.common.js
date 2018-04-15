const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../docs'),
  },
  module: {
    rules: [
      {
        // enforce: pre -> to make sure that the code won't be transpiled by babel
        // before loaded by eslint
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // {
      //   test: /\.(scss)$/,
      //   exclude: /node_modules/,
      //   // use: ExtractTextPlugin.extract({
      //   //   fallback: 'style-loader',
      //   //   use: ['css-loader', 'sass-loader'],
      //   // }),
      //   // use: [
      //   //   {
      //   //     loader: 'style-loader',
      //   //   },
      //   //   {
      //   //     loader: 'css-loader',
      //   //   },
      //   //   {
      //   //     loader: 'sass-loader',
      //   //   },
      //   // ],
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ],
};
