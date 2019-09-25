var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

router.get('/kollilaul', function(req, res) {
    res.send('Ich singe, bis der Tag erwacht ein heller Schein auf Firmament.');
});


module.exports = router;
