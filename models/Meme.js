var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemeSchema = new Schema({
  name: String,
  image_url: String,
  meme_review_episode_num: String,
  meme_review_episode_url: String,
  pewds_rating: String
});

module.exports = mongoose.model('Meme', MemeSchema);
