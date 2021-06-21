const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const PATHS = require('./paths');

const dotEnvPlugin = new Dotenv({
  path: path.join(__dirname, '..', '.env'),
});

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(PATHS.src, 'index.html'),
  filename: 'index.html',
  inject: 'body',
});

const devConfig = {
  mode: 'development',
  entry: ['react-hot-loader/patch', PATHS.src],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  context: PATHS.src,
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: {
      index: '/',
    },
    contentBase: PATHS.build,
    publicPath: '/',
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '~': PATHS.src,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  plugins: [dotEnvPlugin, htmlPlugin],
};

module.exports = devConfig;
