var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

var sslEnabled = false;
var development = app.get('env') === 'development';

// Set the CDN options
var options = {
  publicDir  : path.join(__dirname, 'public'),
  viewsDir   : path.join(__dirname, 'views'),
  domain     : 'cdn.startupuw.com',
  bucket     : 'startupuw-cdn',
  key        : process.env.AWS_S3_KEY,
  secret     : process.env.AWS_S3_SECRET,
  hostname   : 'localhost',
  port       : (sslEnabled ? 443 : 80),
  ssl        : sslEnabled,
  production : !development
};

// Initialize the CDN magic
var CDN = require('express-cdn')(app, options);

// Add the view helper
app.locals.CDN = CDN();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.enable('view cache');

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (development) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
