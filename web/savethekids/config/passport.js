var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/users');
passport = require('passport');

var configAuth = require('./auth');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
      done(err, user);
  });
});

passport.use(new FacebookStrategy({
  // pull in our app id and secret from our auth.js file
  clientID        : configAuth.facebookAuth.clientID,
  clientSecret    : configAuth.facebookAuth.clientSecret,
  callbackURL     : configAuth.facebookAuth.callbackURL
},
function(token, refreshToken, profile, done) {
  process.nextTick(function() {
    User.findOne({uid: profile.id }, function(err, user) {
      if (err)
        return done(err);
      if (user) {
        return done(null, user); // user found, return that user
      } else {
        var newUser = new User();
        console.log(profile);
        newUser.uid    = profile.id; // set the users facebook id                                    
        newUser.name  = profile.displayName; // look at the passport user profile to see how names are returned
        //newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

        newUser.save(function(err) {
        if (err)
            throw err;
          return done(null, newUser);
        });
      }
    });
  });
}));

module.exports = passport;
