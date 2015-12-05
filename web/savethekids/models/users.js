var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  uid: String,
  token: String,
  name: String, 
  email: String
  
});

module.exports = mongoose.model('User', userSchema);
