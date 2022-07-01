const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const CSS_PREFIX = 'rb-';

module.exports = {
  mode: PRODUCTION ? 'production' : 'development',
  target: ['web', 'es2015'],
  entry: {
    index: path.resolve(__dirname, 'src/index.ts'),
  },
  output: {
    filename: 'react-basics.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: PRODUCTION
                  ? `${CSS_PREFIX}[local]`
                  : '[name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|html)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'react-basics.css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: PRODUCTION,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};
