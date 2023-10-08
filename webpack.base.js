const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isProduction = process.env.NODE_ENV === 'production';

let config = {
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 1000000,
            name: 'images/[name].[ext]',
            esModule: false
          }
        },
      },
      {
        test: /\.(pdf)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 1000000,
            name: 'issues/[name].[hash:8].[ext]',
            esModule: false
          }
        },
      },
      {
        test: /\.(zip)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000000,
            name: 'data/[name].[ext]',
            esModule: false
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

if (isProduction) {
  config = merge(config, {
    optimization: {
      minimize: true,
      minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()],
    },
  });
}

module.exports = config;
