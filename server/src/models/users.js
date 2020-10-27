const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  secondName: String,
  telNumber: String,
  fullAddress: String,
  SSN: Object,
});

const User = mongoose.model('users', UserSchema);

module.exports = User;