var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var timestamps = require('mongoose-timestamp');

var UserSchema = new Schema({
  name: String
});

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(timestamps);

module.exports = mongoose.model('User', UserSchema);
