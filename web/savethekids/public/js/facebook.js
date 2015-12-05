Parse.initialise("dGYjRJzYpBYm6PXSLnbhImTDSybv3aYSiESAQvGB", "4gp9nMDSssiyi2G89mypic1W7b7HGPoYHpmmDrGF");

Parse.FacebookUtils.init({ // this line replaces FB.init({
  appId      : '1498622890439553', // Facebook App ID
  status     : true,  // check Facebook Login status
  cookie     : true,  // enable cookies to allow Parse to access the session
  xfbml      : true,  // initialize Facebook social plugins on the page
  version    : 'v2.5' // point to the latest Facebook Graph API version
});

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
