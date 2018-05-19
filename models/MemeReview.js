var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
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
MemeReviewSchema.plugin(deepPopulate);
autoIncrement.initialize(mongoose.connection);
MemeReviewSchema.plugin(autoIncrement.plugin, {
    model: 'MemeReview',
    field: 'meme_review_episode_num',
    startAt: 1,
    incrementBy: 1
});
module.exports = mongoose.model('MemeReview', MemeReviewSchema);