var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var helpers = require('handlebars-helpers')();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var index = require('./routes/index');
var users = require('./routes/users');
var meme = require('./routes/meme');
var episode = require('./routes/episode');

var cookieSession = require('cookie-session')
var app = express();
var User = require('./models/User');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// connect to db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meme-review')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
 
// session 
app.use(cookieSession({
  name: 'session',
  keys: ['keyboard cat'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views');
hbs.registerHelper(helpers);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 3600000 }));
// app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));

// authenticate user before path
app.use((req, res, next) => {
  if (req.user || ['/', '/login', '/register', '/meme/list'].includes(req.path)){
    res.locals.user = req.user;
    next();
  } else {
    res.redirect("/");
  }
});
app.use('/', index);
app.use('/users', users);
app.use('/meme', meme);
app.use('/episode', episode);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
