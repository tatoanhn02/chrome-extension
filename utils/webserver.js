process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.ASSET_PATH = '/';

var WebpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack'),
  config = require('../webpack.config'),
  env = require('./env'),
  path = require('path');

var options = config.redXWallet || {};
var excludeEntriesToHotReload = options.notHotReload || [];

for (var entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    config.entry[entryName] = [
      'webpack/hot/dev-server',
      `webpack-dev-server/client?hot=true&hostname=localhost&port=${env.PORT}`,
    ].concat(config.entry[entryName]);
  }
}

delete config.redXWallet;

var compiler = webpack(config);

var server = new WebpackDevServer(
  {
    allowedHosts: 'all',
    client: {
      webSocketTransport: 'sockjs',
    },
    devMiddleware: {
      publicPath: `http://localhost:${env.PORT}/`,
      writeToDisk: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: 'localhost',
    hot: true,
    liveReload: false,
    port: env.PORT,
    static: {
      directory: path.join(__dirname, '../build'),
    },
    webSocketServer: 'sockjs',
  },
  compiler,
);

(async () => {
  await server.start();
})();
