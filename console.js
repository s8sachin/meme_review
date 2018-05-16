var repl = require("repl");
// var epa = require("epa"); // check later to maintain envs
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meme-review')
.then(() => {
  console.log('REPL console');
  var replServer = repl.start({});
  // replServer.context.epa = epa;
  replServer.context.db = mongoose;  

})
.catch((err) => console.error(err));
