var express = require('express');
var router = express.Router();
var User = require('../models/users');

var passport = require('../config/passport');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { user: req.user } );
});

router.get('/login', function(req, res, next){
  res.render('login', { user: req.user } );
});

<<<<<<< HEAD
router.get('/matthew', function(req, res, next){
  res.render('user', { user: req.user } );
});

=======
>>>>>>> fadd22c525e91dc923c53d4f22c366aec7d59027
router.get('/signup', function(req, res, next){
  res.render('lol', { user: req.user } );
});

router.get('/dashboard', ensureAuthenticated, function(req,res,next){
  res.render('dashboard', {user: req.user } );
});

router.post('/search', function(req, res, next) {
  User.findOne({name: req.body.search}, function(err, user){
    res.redirect('/users/'+user.uid);
  });
  /*
  console.log(req.body.search);
  res.render('index', { user: req.user } );
  */
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));


router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
      successRedirect : '/dashboard',
      failureRedirect : '/'
  }));


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');

});

module.exports = router;


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
    return next(); 
  }
  res.redirect('/login')
}
