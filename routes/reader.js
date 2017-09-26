var express = require('express');
var fs = require('fs');
var path = require("path");
var router = express.Router();
var currentEntry = 0;
/* GET reader page. */
router.get('/', function(req, res, next) {
  console.log(process.argv);
  var testData = fs.readFileSync(__dirname + '/../public/series/seriesData.json');

  var data = JSON.parse(testData);
  res.render('page',
    {
      author: data[currentEntry].author,
      storyTitle: data[currentEntry]["entry-name"],
      content: fs.readFileSync(__dirname + "/../public/series/" + data[currentEntry].content, "utf8")
    });
});



module.exports = router;
