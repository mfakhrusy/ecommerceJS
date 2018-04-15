const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      // {
      //   // enforce: pre -> to make sure that the code won't be transpiled by babel
      //   // before loaded by eslint
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     'eslint-loader',
      //   ],
      // },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     'babel-loader',
      //   ],
      // },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
  },
});
