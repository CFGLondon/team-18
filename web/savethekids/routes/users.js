var express = require('express');
var router = express.Router();

var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id', function(req, res, next) {
  // get user by id
  User.findOne({uid: req.params.id}, function(err, user){
    if(err){
      res.render('error', {message: 'user doesnt exist'});
      res.end();
    } else {
      res.render('user', {user: user});
      res.end();
    }
  });
});

module.exports = router;
