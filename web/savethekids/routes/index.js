var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lol', { title: 'Express' });
});

router.get('/login', function(req, res, next){
  res.render('lol', {title: 'login'});
});

router.get('/signup', function(req, res, next){
  res.render('lol', {title: 'Signup'});
});

module.exports = router;
