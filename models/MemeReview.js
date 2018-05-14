var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var autoIncrement = require('mongoose-ai');
var Schema = mongoose.Schema;

var MemeReviewSchema = new Schema({
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
autoIncrement.initialize(mongoose.connection);
MemeReviewSchema.plugin(autoIncrement.plugin, {
    model: 'MemeReview',
    field: 'meme_review_episode_num',
    startAt: 1,
    incrementBy: 1
});
module.exports = mongoose.model('MemeReview', MemeReviewSchema);