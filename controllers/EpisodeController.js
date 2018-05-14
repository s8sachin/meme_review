var mongoose = require('mongoose');
var passport = require('passport');
var MemeReview = require('../models/MemeReview');

var episodesController = {};

episodesController.new = function(req, res) {
  res.render('episode/new');
};

episodesController.create = function(req, res) {
  console.log("hii")
  res.redirect('/episode/list')
};

episodesController.index = function(req, res) {
  MemeReview.find({}).then(episodes => {
    res.render('episode/index', {
      episodes: episodes
    });
  });
};

module.exports = episodesController;
