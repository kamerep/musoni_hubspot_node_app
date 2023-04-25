var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Express has' });
  });

  module.exports = router;