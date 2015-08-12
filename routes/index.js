var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('newtree', { title: 'Express' });
});

router.get('/tree',function(req,res){
  res.render('Tree structure');
});

router.get('/newtree',function(req,res){
  res.render('newtree');
});
module.exports = router;
