var express = require('express');
var router = express.Router();

var Parse = require('parse/node');

Parse.initialise("dGYjRJzYpBYm6PXSLnbhImTDSybv3aYSiESAQvGB", "4gp9nMDSssiyi2G89mypic1W7b7HGPoYHpmmDrGF");

Parse.FacebookUtils.init({ // this line replaces FB.init({
  appId      : '1498622890439553', // Facebook App ID
  status     : true,  // check Facebook Login status
  cookie     : true,  // enable cookies to allow Parse to access the session
  xfbml      : true,  // initialize Facebook social plugins on the page
  version    : 'v2.5' // point to the latest Facebook Graph API version
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next){
  Parse.FacebookUtils.logIn(null, {
    success: function(user) {
      if (!user.existed()) {
        alert("User signed up and logged in through Facebook!");
      } else {
        alert("User logged in through Facebook!");
      }
    },
    error: function(user, error) {
      alert("User cancelled the Facebook login or did not fully authorize.");
    }
  });
});

router.get('/signup', function(req, res, next){
  res.render('index', {title: 'Signup'});
});

module.exports = router;
