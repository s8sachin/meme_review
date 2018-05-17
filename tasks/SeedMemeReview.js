var mongoose = require('mongoose');
var async = require('async')
var MemeReview = require('../models/MemeReview');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meme-review')
.then(() => {
  console.log('connection succesful');
})
.catch((err) => console.error(err));
 

var SeedMemeReview = {};

SeedMemeReview.dumpEpisodes = () => {
  async.eachSeries(SeedMemeReview.data, (item, callback) => {
    new MemeReview(item).save((e,i) => {
      console.log(item)
      callback();
    })
  }, (err) => {
    console.log(err);
    mongoose.connection.close()
  });
};

// Data array containing seedMemeReview data - documents organized by Model
SeedMemeReview.data = [{
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=-KE8v44VS_k',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/-KE8v44VS_k/0.jpg'
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=M3BlpkaZp-k',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/M3BlpkaZp-k/0.jpg' 
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=qhu7Xhrt2dE',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/qhu7Xhrt2dE/0.jpg' 
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=U8LHgq3Jlnw',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/U8LHgq3Jlnw/0.jpg' 
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=l6YiAqOgGOI',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/l6YiAqOgGOI/0.jpg'
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=H34qrTkhFz0',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/H34qrTkhFz0/0.jpg'
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=pHxlZ4dTXug',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/pHxlZ4dTXug/0.jpg' 
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=hc9Ia9FVHWI',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/hc9Ia9FVHWI/0.jpg' 
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=8B2dwVbTKDg',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/8B2dwVbTKDg/0.jpg' 
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=p33NtCtIjrM',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/p33NtCtIjrM/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=TRKmvG1EBw8',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/TRKmvG1EBw8/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=HsbOmLq34a8',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/HsbOmLq34a8/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=CBJcC6ZqVPY',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/CBJcC6ZqVPY/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=_nVQgqlo0Ow',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/_nVQgqlo0Ow/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=UhF3XgIH4OI',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/UhF3XgIH4OI/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=eS4rlDJ1aVQ',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/eS4rlDJ1aVQ/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=6V9haXkpr50',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/6V9haXkpr50/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=XD0lxNiZ7mE',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/XD0lxNiZ7mE/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=sqFVrfinlYk',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/sqFVrfinlYk/0.jpg'  
  },
  {
    'meme_review_episode_url': 'https://www.youtube.com/watch?v=7PzSOvPTHPA',
    'meme_review_episode_thumb': 'https://img.youtube.com/vi/7PzSOvPTHPA/0.jpg'  
  }]

module.exports = SeedMemeReview
