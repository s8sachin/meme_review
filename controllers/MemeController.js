var mongoose = require('mongoose');
var passport = require('passport');
var Meme = require('../models/Meme');

var memeController = {};

memeController.new = function(req, res) {
  res.render('meme/new');
};

memeController.create = function(req, res) {
  img_url_original = req.body.image_url
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
    meme_review_episode_num: req.body.meme_review_episode_num,
    meme_review_episode_url: req.body.meme_review_episode_url
  };
  new Meme(meme).save(err => console.log(err));
  res.redirect('/meme/new_meme');
};

memeController.index = function(req, res) {
  Meme.find({}).then(memes => {
    res.render('meme/index', {
      memes: memes
    });
  })
};

function set_image(image_url, size){
  return image_url.replace('.jpg', `${size}.jpg`).replace('.png', `${size}.png`).replace('.jpeg', `${size}.jpeg`).replace('.gif', `${size}.gif`)
}

module.exports = memeController;