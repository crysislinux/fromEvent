const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const constants = require('./constants');

const hotScript = 'webpack-hot-middleware/client?reload=true';
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    'app': ['./src/main.ts', hotScript],
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      "@app": helpers.root('src', 'app'),
    }
  },

  node: {
    fs: 'empty',
  },

  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false // workaround for ng2
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'name=assets/[name].[hash].[ext]'
        },
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src'),
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.css$/,
        include: helpers.root('src'),
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        include: helpers.root('src'),
        use: [
          'raw-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          '@angularclass/hmr-loader',
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
    ]
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'HMR': JSON.stringify(true),
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV),
        'HMR': JSON.stringify(true)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html.ejs',
      chunks: ['app']
    }),
  ],

  devServer: {
    hot: true,
    inline: true
  },
};
