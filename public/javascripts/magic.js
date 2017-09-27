const fs = require("fs");

/**
 * Gets all entries from a JSON file and returns them in a new array
 * @returns {Array} An array of all entries found in seriesData.json
 **/
const getParts = function(){
  const urlArray = [];
  const seriesData = JSON.parse(fs.readFileSync(__dirname + '/../series/seriesData.json', "utf8"));
  seriesData.forEach(function(element){
    urlArray.push(element);
  });
  return urlArray;
};

module.exports = {getParts};
