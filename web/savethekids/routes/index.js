var express = require('express');
var router = express.Router();

var passport = require('../config/passport');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { user: req.user } );s
});

router.get('/login', function(req, res, next){
  res.render('login', { user: req.user } );
});

router.get('/matthew', function(req, res, next){
  res.render('user', { user: req.user } );
});

router.get('/signup', function(req, res, next){
  res.render('lol', { user: req.user } );
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));


router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
      successRedirect : '/users',
      failureRedirect : '/'
  }));


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');

});

module.exports = router;
