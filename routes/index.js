const getParts = require("../public/javascripts/magic.js").getParts;
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  var allParts = getParts();
  res.render('index', { title: 'Series', parts: allParts});
});

module.exports = router;
