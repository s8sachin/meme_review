var express = require('express');
var router = express.Router();
var meme = require('../controllers/MemeController.js');

// new meme
router.get('/new_meme', meme.new);

router.post('/new_meme', meme.create);

router.get('/list', meme.index);

module.exports = router;
