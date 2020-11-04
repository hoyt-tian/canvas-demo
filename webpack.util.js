const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Plugin: WebpackMildCompile } = require('webpack-mild-compile');
const path = require('path');

const createTemplate = () => {
  return {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {},
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name]-[chunkhash].js',
      chunkFilename: '[name]-[chunkhash].js',
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
        {
          test: /\.html?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
        {
          test: /\.less$/,
          loader:  [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            {
              loader: "less-loader"
            }
          ], // compiles Less to CSS
        },
        {
          test: /\.css$/,
          loader: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
          ],
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '$types': path.resolve(__dirname, 'types')
      },
    },
    externals: {
      cc: 'cc',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    optimization: {
      splitChunks: {
        minChunks: 2,
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name]-[chunkhash].css',
        chunkFilename: '[name]-[chunkhash].css',
      }),
      new CaseSensitivePathsPlugin(),
      new WebpackMildCompile(),
    ],
    stats: {
      warnings: false,
    },
  };
};

const jsAlias = (wpConf, mapper) => {
  const { resolve: { alias = {} } } = wpConf;
  wpConf.resolve.alias = {
    ...alias,
    ...mapper,
  }
}


const addEntries = (wpConf, entries) => {
  const { pages = [] } = entries;

  pages.forEach(page => {
    const entry = page.entry.substring(0, page.entry.length - 5);
    const { src, spm, title, ...rest } = page;
    wpConf.entry[entry] = src;
    wpConf.plugins.push(new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
      },
      filename: page.entry,
      chunks: [ entry, 'common' ],
      env: process.env.NODE_ENV,
      title,
      template: path.join(__dirname, './src/template.ejs'),
      ...rest,
    }));
  });
  return wpConf
}

module.exports = {
  createTemplate,
  jsAlias,
  addEntries,
}
