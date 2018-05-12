var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/User');

var memeController = {};

// Restrict access to root page
memeController.new = function(req, res) {
  res.render('meme/new', {
    user: req.user
  });
};

module.exports = memeController;