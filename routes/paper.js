/* the all rest api features*/

var express = require('express');
var router = express.Router();

router.get('/getPapers', function(req, res, next) {
  res.render('index',{title:global.webConf.title});
});




module.exports = router;
