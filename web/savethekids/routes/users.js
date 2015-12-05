var express = require('express');
var router = express.Router();

var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id', function(req, res, next) {
  User.findOne({uid: req.params.id}, function(err, user){

    if(!err)
      res.render('user', {userdata: user});

  });
});

module.exports = router;
