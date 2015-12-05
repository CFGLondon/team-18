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

router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));


router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
      successRedirect : '/profile',
      failureRedirect : '/'
  }));


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
