import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
  title: String,
  price: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
})

module.exports = mongoose.model('Book', BookSchema);