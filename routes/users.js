var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/kollilaul", function(req, res, next) {
  res.send("Nun liebe Kinder gebt fein Acht...");
});

module.exports = router;
