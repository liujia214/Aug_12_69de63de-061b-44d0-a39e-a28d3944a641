var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Tree structure', { title: 'Express' });
});

router.get('/tree',function(req,res){
  res.render('Tree structure');
});

module.exports = router;
