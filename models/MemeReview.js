var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var MemeReviewSchema = new Schema({
  meme_review_episode_num: {
    type: Number,
    required: true
  },
  meme_review_episode_url: {
    type: String,
    required: true
  },
  meme_review_episode_thumb: {
  	type: String,
  	required: true
  }
});

MemeReviewSchema.plugin(timestamps);
module.exports = mongoose.model('MemeReview', MemeReviewSchema);