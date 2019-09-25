var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

router.get('/cool',(req,res,next) => {
  res.render("cool", { cool_message: "It's all good man" });
});

module.exports = router;
