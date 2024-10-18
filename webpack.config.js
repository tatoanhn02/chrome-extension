const webpack = require('webpack'),
  path = require('path'),
  env = require('./utils/env'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'),
  ReactRefreshTypeScript = require('react-refresh-typescript'),
  fs = require('node:fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const ASSET_PATH = process.env.ASSET_PATH || '/';

const isDevelopment = process.env.NODE_ENV !== 'production';

const ALIAS = {};

const FILE_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2',
];

const options = {
  entry: {
    contentScript: path.join(__dirname, 'src', 'pages', 'Content', 'index.ts'),
    popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.tsx'),
  },
  infrastructureLogging: {
    level: 'info',
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        exclude: /node_modules/,
        test: new RegExp('.(' + FILE_EXTENSIONS.join('|') + ')$'),
        type: 'asset/resource',
      },
      {
        exclude: /node_modules/,
        loader: 'html-loader',
        test: /\.html$/,
      },
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean,
                ),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'source-map-loader',
          },
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ASSET_PATH,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin({ verbose: false }),
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: 'src/manifest.json',
          to: path.join(__dirname, 'build'),
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                description: packageJson.description,
                version: packageJson.version,
                ...JSON.parse(content.toString()),
              }),
            );
          },
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: 'src/assets/img/icon16.png',
          to: path.join(__dirname, 'build'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: 'src/assets/img/icon48.png',
          to: path.join(__dirname, 'build'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: 'src/assets/img/icon128.png',
          to: path.join(__dirname, 'build'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      cache: false,
      chunks: ['popup'],
      filename: 'popup.html',
      template: path.join(__dirname, 'src', 'pages', 'Popup', 'index.html'),
    }),
  ].filter(Boolean),
  redXWallet: {
    notHotReload: ['contentScript'],
  },
  resolve: {
    alias: ALIAS,
    extensions: FILE_EXTENSIONS.map((extension) => '.' + extension).concat([
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.css',
    ]),
  },
};

if (env.NODE_ENV === 'development') {
  options.devtool = 'cheap-module-source-map';
} else {
  options.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  };
}

module.exports = options;
