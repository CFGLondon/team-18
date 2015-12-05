var Parse = require('parse/node');
Parse.initialise("$PARSE_APP_ID", "$PARSE_JS_KEY");

Parse.FacebookUtils.init({ // this line replaces FB.init({
  appId      : '1498622890439553', // Facebook App ID
  status     : true,  // check Facebook Login status
  cookie     : true,  // enable cookies to allow Parse to access the session
  xfbml      : true,  // initialize Facebook social plugins on the page
  version    : 'v2.5' // point to the latest Facebook Graph API version
});

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
