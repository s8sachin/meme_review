var mongoose = require('mongoose');
var Meme = require('../../models/Meme');
var MemeReview = require('../../models/MemeReview');

var memeController = {};

memeController.index = function(req, res) {
  start = req.query.start || 0;
  show = req.query.show || 0;
  projection = {_id: 0, __v: 0, createdAt: 0, updatedAt: 0};
  Meme.find({})
  .select(projection)
  .populate('meme_review', projection)
  .then(memes => {
    res.json({'memes': memes});
  })
  .catch(e => res.status(500).json({'error': e.message}));
};

function set_image(image_url, size){
  return image_url.replace('.jpg', `${size}.jpg`).replace('.png', `${size}.png`).replace('.jpeg', `${size}.jpeg`).replace('.gif', `${size}.gif`)
};

module.exports = memeController;