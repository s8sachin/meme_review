var express = require('express');
var router = express.Router();
var meme = require('../../controllers/api/MemeController.js');

router.get('/list', meme.index);

module.exports = router;
