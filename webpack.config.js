const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const { createTemplate, addEntries } = require('./webpack.util');
const entries = require('./entry.config');

const webpackConfig = createTemplate();

const isDev = process.env.NODE_ENV !== 'production';

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    APP_VERSION: JSON.stringify(pkg.version),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  })
);

addEntries(webpackConfig, entries);

if (isDev) {
  webpackConfig.devtool = 'sourcemap';
  webpackConfig.devServer = {
    contentBase: [ 
      path.join(__dirname, 'dist')
    ],
    host: '0.0.0.0',
    publicPath: '/',
    disableHostCheck: true,
  };
}

// 增加npm包大小可视化
if (process.env.analyze === "YES") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
