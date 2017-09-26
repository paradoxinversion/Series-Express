const fs = require("fs");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var allParts = getParts();
  res.render('index', { title: 'Series', parts: allParts});
});
function getParts(){
  var urlArray = [];
  var seriesData = JSON.parse(fs.readFileSync(__dirname + '/../public/series/seriesData.json', "utf8"));
  // seriesData.forEach(function(element){
  //   urlArray.push(element.content);
  // });
  seriesData.forEach(function(element){
    urlArray.push(element);
  });
  console.log(seriesData);
  console.log(urlArray);
  return urlArray;
}
module.exports = router;
