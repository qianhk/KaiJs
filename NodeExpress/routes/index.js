var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'ExpressTitle'});
});

router.get('/listUsers', function (req, res) {
    let userJsonFilePath = __dirname + "/../bin/data/" + "users.json";
    console.log('look path: ' + userJsonFilePath);
    fs.readFile(userJsonFilePath, 'utf8', function (err, data) {
        // console.log(data);
        res.end(data);
    });
});

router.get('/test/:name', function (req, res) {
    res.end('print: ' + req.params.name);
});

router.get('/test', function (req, res) {
    res.end('print: ' + 'get no other');
});

router.post('/test', function (req, res) {
    var name = req.body.name;
    res.json({message: 'Hello ' + name});
});

router.put('/test', function (req, res) {
    res.end('print: ' + 'put no other');
});

router.delete('/test', function (req, res) {
    res.end('print: ' + 'delete no other');
});

module.exports = router;
