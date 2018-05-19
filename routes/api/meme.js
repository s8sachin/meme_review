var express = require('express');
var router = express.Router();
var meme = require('../../controllers/api/MemeController.js');

router.get('/list', meme.index);
router.get('/search', meme.search);

module.exports = router;
