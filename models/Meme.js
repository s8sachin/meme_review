var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var MemeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  meme_review_episode_num: {
    type: String,
    required: true
  },
  meme_review_episode_url: {
    type: String,
    required: true
  },
  pewds_rating: {
    type: String,
    required: true,
    default: "Fill me"
  }
});

MemeSchema.plugin(timestamps);
module.exports = mongoose.model('Meme', MemeSchema);
