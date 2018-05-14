var mongoose = require('mongoose');
var passport = require('passport');
var MemeReview = require('../models/MemeReview');

var episodesController = {};

episodesController.new = function(req, res) {
  res.render('episode/new');
};

episodesController.create = function(req, res) {
  youtube_url = req.body.meme_review_episode_url;
  youtube_vid_id = youtube_url.split("watch?v=")[1];
  meme_review = {
    meme_review_episode_url : youtube_url,
    meme_review_episode_thumb : `https://img.youtube.com/vi/${youtube_vid_id}/0.jpg`
  }
  new MemeReview(meme_review)
  .save(err => {
    if (err) {
      return console.log(err);
    };
    res.redirect('/episode/list');
  });
};

episodesController.index = function(req, res) {
  MemeReview.find({}).then(episodes => {
    res.render('episode/index', {
      episodes: episodes
    });
  });
};

module.exports = episodesController;
