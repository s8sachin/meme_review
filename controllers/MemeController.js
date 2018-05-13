var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/User');
var Meme = require('../models/Meme');

var memeController = {};

memeController.new = function(req, res) {
  res.render('meme/new');
};

memeController.create = function(req, res) {
  meme = { 
    name: req.body.name,
    image_url: req.body.image_url,
    meme_review_episode_num: req.body.meme_review_episode_num,
    meme_review_episode_url: req.body.meme_review_episode_url 
  }
  new Meme(meme).save(err => console.log(err))
  res.redirect('/meme/new_meme');
};

memeController.index = function(req, res) {
  Meme.find({}).then(memes => {
    res.render('meme/index', {
      memes: memes
    });
  })
  // console.log(memes)
};

module.exports = memeController;