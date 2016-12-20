var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  let dataPath = path.join(__dirname, '../bin/data/');
  console.log(dataPath);
  fs.readFile(dataPath + "users.json", 'utf8', function (err, data) {
    // console.log(data);
    res.end(data);
    // res.send('respond with a resource: ' + data + " dataEnd.");
  });
});

module.exports = router;
