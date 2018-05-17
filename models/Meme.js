var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var MemeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image_urls: {
    img_url_original : {
      type: String,
      required: true
    },
    img_url_small_square : {
      type: String,
      required: true
    },
    img_url_big_square : {
      type: String,
      required: true
    },
    img_url_small_thumb : {
      type: String,
      required: true
    },
    img_url_medium_thumb : {
      type: String,
      required: true
    },
    img_url_large_thumb : {
      type: String,
      required: true
    },
    img_url_huge_thumb : {
      type: String,
      required: true
    }
  },
  meme_review: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'MemeReview'
  },
  pewds_rating: {
    type: String,
    required: true,
    default: "Fill me"
  },
  bonus_meme: {
    type: Boolean,
    default: false
  },
  garbage_meme: {
    type: Boolean,
    default: false
  }
});

MemeSchema.plugin(timestamps);
module.exports = mongoose.model('Meme', MemeSchema);
