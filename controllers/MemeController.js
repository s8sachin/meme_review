var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/User');

var memeController = {};

memeController.new = function(req, res) {
  res.render('meme/new', {
    user: req.user
  });
};

memeController.create = function(req, res) {
  res.render('meme/create', {
    user: req.user
  });
};

module.exports = memeController;