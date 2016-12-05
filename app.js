'use strict';
const env = process.env.NODE_ENV || 'development';
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('winston');
const vrfRoutes = require('./routes/vrf');
const lodashExpress = require('lodash-express');
const compression = require('compression');

const app = express();

if (env === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  const webpackMiddleware = require('webpack-dev-middleware');
  const compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, {
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    },
    serverSideRender: true
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
lodashExpress(app, 'html');
app.set('view engine', 'html');

if (env === 'production') {
  app.use(compression());
}

const winstonStream = {
  write: message => {
    logger.info(message.slice(0, -1));
  }
};

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('combined', { stream: winstonStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', vrfRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    logger.error(err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  logger.error(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
