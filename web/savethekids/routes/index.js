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

router.get('/signup', function(req, res, next){
  res.render('register', { user: req.user } );
});

router.get('/profile', function(req, res, next){
  res.render('profile', { user: req.userdata } );
});

router.get('/dashboard', ensureAuthenticated, function(req,res,next){
  res.render('dashboard', {user: req.user } );
});

router.post('/search', function(req, res, next) {
  User.findOne({name: req.body.search}, function(err, user){
    if(!err)
    if(user) {
      res.redirect('/users/'+user.uid);
    }
  });
});

router.get('/auth/facebook', passport.authenticate('facebook'));


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
