const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('agora-classroom-sdk/webpack/webpack.base');
const path = require('path');
const { DEFAULT_PORT, ROOT_PATH } = require('./utils/index');
const { dev } = require('./utils/loaders');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const entry = path.resolve(ROOT_PATH, './src/index.tsx');
const template = path.resolve(ROOT_PATH, './public/index.html');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: entry,
  output: {
    publicPath: '/',
    filename: 'bundle-[contenthash].js',
  },
  devServer: {
    compress: true,
    port: DEFAULT_PORT,
  },
  module: {
    rules: [...dev],
  },
  resolve: {
    alias: {
      '@': path.resolve(ROOT_PATH, '../agora-classroom-sdk/src'),
      '@app': path.resolve(ROOT_PATH, 'src'),
    },
  },
  optimization: {
    nodeEnv: 'development',
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  plugins: [
    new dotenv({
      path: './.env',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: template,
      inject: true,
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
    new ESLintPlugin(),
  ],
  ignoreWarnings: [/createRoot/],
};

const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;