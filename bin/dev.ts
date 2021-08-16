const webpack = require('webpack');
const nodemon = require('nodemon');
const express = require('express');
const path = require('path');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');

const [clientConfig, serverConfig] = require('../webpack.config');

// app compilation
// with HMR
const hmrServer = express();
const appCompiler = webpack(clientConfig);

hmrServer.use(webpackDevMiddleWare(appCompiler, {
  publicPath: clientConfig.output.publicPath,
  serverSideRender: true,
  noInfo: true,
  writeToDisk: true,
  stats: 'errors-only',
  watchOptions: {
    ignore: '/dist/',
  },
}));

hmrServer.use(webpackHotMiddleWare(appCompiler, {
  path: '/static/__webpack_hmr',
}));

hmrServer.listen(3001, () => {
  console.log('HMR Server successful started');
});

// server compilation
const compiler = webpack(serverConfig);

compiler.run((error) => {
  if (error) {
    console.log('Compilation failed: ', error);
  }

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/app'),
    ],
  });
});
