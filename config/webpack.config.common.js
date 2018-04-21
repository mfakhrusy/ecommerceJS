const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../docs'),
    // publicPath: path.resolve(__dirname, '../docs'),
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
      {
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            }
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js',
    })
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   swDest: 'sw.js',
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   // the data from below's url will be cached at runtime
    //   runtimeCaching: [{
    //     urlPattern: new RegExp('https://5ac586c8a79a110014ce6778.mockapi.io/ejs'),
    //     handler: 'staleWhileRevalidate',
    //   }]
    // }),
  ],
};
