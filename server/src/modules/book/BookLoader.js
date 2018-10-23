import Book from './BookModel';

const ObjectId = require('mongoose').Types.ObjectId;
ObjectId.prototype.valueOf = function () {
  return this.toString();
};

const loadAllBooks = (root, args, context) => {
  return Book.find().populate('author');
};

const addBook = (root, args, context) => {
  return Book.create(args);
}

export {
  loadAllBooks,
  addBook,
}
