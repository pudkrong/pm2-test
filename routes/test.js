var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var html = 'version 05';
  console.log(html);
  res.send(html);
});

module.exports = router;
