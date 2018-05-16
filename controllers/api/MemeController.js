var mongoose = require('mongoose');
var Meme = require('../../models/Meme');
var MemeReview = require('../../models/MemeReview');

var memeController = {};

memeController.index = function(req, res) {
  Meme.find({})
  .populate('meme_review', 'meme_review_episode_num meme_review_episode_url')
  .then(memes => {
    res.json({'memes': memes});
  });
};

function set_image(image_url, size){
  return image_url.replace('.jpg', `${size}.jpg`).replace('.png', `${size}.png`).replace('.jpeg', `${size}.jpeg`).replace('.gif', `${size}.gif`)
};

module.exports = memeController;