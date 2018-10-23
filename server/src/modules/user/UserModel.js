import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
})

module.exports = mongoose.model('User', UserSchema);