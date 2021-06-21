const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
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

const extractCssPlugin = new MiniCssExtractPlugin({
  filename: 'index.css',
});

const compressionPlugin = new CompressionPlugin();

const terserPlugin = new TerserPlugin({
  parallel: true,
  terserOptions: {
    sourceMap: true,
  },
});

const prodConfig = {
  mode: 'production',
  entry: [PATHS.src],
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [terserPlugin],
    splitChunks: {
      chunks: 'all',
    },
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  plugins: [dotEnvPlugin, htmlPlugin, extractCssPlugin, compressionPlugin],
};

module.exports = prodConfig;
