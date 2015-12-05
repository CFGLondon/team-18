var express = require('express');
var router = express.Router();

var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id', function(req, res, next) {
  User.findOne({uid: req.params.id}, function(err, user){
    console.log(user.name);
  });
  res.redirect('/profile');
});

module.exports = router;
