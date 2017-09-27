const fs = require("fs");
var express = require('express');
var router = express.Router();
const getParts = function(){
  var urlArray = [];
  var seriesData = JSON.parse(fs.readFileSync(__dirname + '/../public/series/seriesData.json', "utf8"));

  seriesData.forEach(function(element){
    urlArray.push(element);
  });
  return urlArray;
};
/* GET home page. */
router.get('/', function(req, res, next) {
  var allParts = getParts();
  res.render('index', { title: 'Series', parts: allParts});
});


module.exports = router;
