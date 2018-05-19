var mongoose = require('mongoose');
var passport = require('passport');
var async = require('async');
var Meme = require('../models/Meme');
var MemeReview = require('../models/MemeReview');

var memeController = {};

memeController.new = function(req, res) {
  MemeReview.find({}, '_id meme_review_episode_num', {
    sort: {
      meme_review_episode_num: -1
    }
  }, (err, episodes_list) => {
    res.render('meme/new', {
      layout: false,
      episodes_list: episodes_list
    });
  });
};

memeController.create = function(req, res) {
  img_url_original = req.body.image_url;
  meme = {
    name: req.body.name,
    image_urls: {
      img_url_original : img_url_original,
      img_url_small_square : set_image(img_url_original, 's'),
      img_url_big_square : set_image(img_url_original, 'b'),
      img_url_small_thumb : set_image(img_url_original, 't'),
      img_url_medium_thumb : set_image(img_url_original, 'm'),
      img_url_large_thumb : set_image(img_url_original, 'l'),
      img_url_huge_thumb : set_image(img_url_original, 'h')
    },
    meme_review: req.body.meme_review_episode,
    bonus_meme: (req.body.bonus_meme ? true : false),
    garbage_meme: (req.body.garbage_meme ? true : false)
  };
  new Meme(meme).save((err, meme) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/meme/list');
  });
};

memeController.index = function(req, res) {
  start = req.query.start || 0;
  show = req.query.show || 0;
  Meme.find({})
  .skip(Number(start))
  .limit(Number(show))
  .deepPopulate('meme_review', 'meme_review_episode_num meme_review_episode_url')
  .sort({'createdAt': 'descending'})
  .exec((err, memes) => {
    async.sortBy(memes, (x, callback) => {
      callback(null, x.meme_review.meme_review_episode_num * -1);
    }, (err, memes) => {
      res.render('meme/index', {
        memes: memes
      });
    });
  });
};

function set_image(image_url, size){
  return image_url.replace('.jpg', `${size}.jpg`).replace('.png', `${size}.png`).replace('.jpeg', `${size}.jpeg`).replace('.gif', `${size}.gif`)
};

module.exports = memeController;