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
  meme_review_id: {
    type: Schema.Types.ObjectId,
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
