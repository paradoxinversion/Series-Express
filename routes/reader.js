const express = require('express');
const fs = require('fs');
const router = express.Router();
let currentEntry = 0;

router.get('/', function(req, res, next) {
  if (req.query.part){
    currentEntry = req.query.part;
    const data = JSON.parse(fs.readFileSync(__dirname + '/../public/series/seriesData.json'));

    res.render('page',
      {
        author: data[currentEntry].author,
        storyTitle: data[currentEntry]["entry-name"],
        content: fs.readFileSync(__dirname + "/../public/series/" + data[currentEntry].content, "utf8"),
        part: currentEntry,
        totalParts: data.length
      });
  } else{
    //Redirect if there's no query string
    res.redirect("?part=0");
  }
});

module.exports = router;
