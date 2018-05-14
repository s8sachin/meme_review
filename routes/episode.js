var express = require('express');
var router = express.Router();
var episode = require('../controllers/EpisodeController.js');

// new episode
router.get('/new_episode', episode.new);

router.post('/new_episode', episode.create);

router.get('/list', episode.index);

module.exports = router;
