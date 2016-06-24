var express = require('express');
var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware')

var app = express();

var webpackConfig = require('./webpack.config')
var webpackBundler = webpack(webpackConfig)

app.use(webpackDevMiddleware(webpackBundler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
}));
app.use(webpackHotMiddleware(webpackBundler));

app.use(express.static('dist'));

app.listen(3000, function () {
  console.log('listening on port 3000');
});