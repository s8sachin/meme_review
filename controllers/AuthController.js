var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/User');

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', {
    user: req.user
  });
};

// Go to registration page
userController.register = function(req, res) {
  res.render('auth_user/register');
};

// Post registration
userController.doRegister = function(req, res) {
  if (req.body.invitationKey !== "hello") {
    console.log('wrong invitation key');
    return res.render('auth_user/register', {
      flash: {
        class: "alert-danger",
        message: "Wrong invitation key"
      }
    });
  }
  User.register(new User({
    name: req.body.name,
    username: req.body.username
  }), req.body.password, function(err, user) {
    if (err) {
      console.log(err)
      return res.render('auth_user/register', {
        user: user,
        flash: {
          class: "alert-danger",
          message: "something went wrong"
        }
      });
    }

    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('auth_user/login');
};

// Post login
userController.doLogin = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (info) {
      console.log(info);
      return res.render('auth_user/login', {
        flash: {
          class:  "alert-danger",
          message: "wrong username or password"
        }
      });
    }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;