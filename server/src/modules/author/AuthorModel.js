import mongoose from 'mongoose';

const AuthorSchema = mongoose.Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('Author', AuthorSchema);