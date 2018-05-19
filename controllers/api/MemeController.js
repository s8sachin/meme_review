var mongoose = require('mongoose');
var Meme = require('../../models/Meme');
var MemeReview = require('../../models/MemeReview');

var memeController = {};

memeController.index = function(req, res) {
  start = req.query.start || 0;
  show = req.query.show || 0;
  projection = {_id: 0, __v: 0, createdAt: 0, updatedAt: 0};
  Meme.find()
  .select(projection)
  .skip(Number(start))
  .limit(Number(show))
  .deepPopulate('meme_review', projection)
  .then(memes => {
    res.json({'memes': memes});
  })
  .catch(e => res.status(500).json({'error': e.message}));
};

memeController.search = function(req, res) {
  show = req.query.show || 0;
  name = req.query.name;
  projection = {_id: 0, __v: 0, createdAt: 0, updatedAt: 0};
  Meme.find({name: new RegExp(name, 'i')})
  .select(projection)
  .limit(Number(show))
  .deepPopulate('meme_review', projection)
  .then(memes => {
    res.json({'memes': memes});
  })
  .catch(e => res.status(500).json({'error': e.message}));
};

module.exports = memeController;