var mongoose = require('mongoose');
var async = require('async')
var MemeReview = require('../models/MemeReview');
var Meme = require('../models/Meme');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meme-review')
.then(() => {
  console.log('connection succesful');
})
.catch((err) => console.error(err));
 

var SeedMemes = {};

SeedMemes.dumpEpisodes = () => {
  async.eachSeries(SeedMemes.data, (item, callback) => {
    new Meme(item).save((e,i) => {
      console.log(item)
      callback();
    })
  }, (err) => {
    console.log(err);
    mongoose.connection.close()
  });
};

// Data array containing seedMemes data - documents organized by Model
SeedMemes.data = []

module.exports = SeedMemes
