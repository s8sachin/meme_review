var express = require('express');
var router = express.Router();
var meme = require('../controllers/MemeController.js');

// new meme
router.get('/new_meme', meme.new);

module.exports = router;
