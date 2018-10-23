import Author from './AuthorModel';

const ObjectId = require('mongoose').Types.ObjectId;
ObjectId.prototype.valueOf = function () {
  return this.toString();
};

const loadAllAuthors = () => {
  return Author.find();
};

const loadAuthor = (root, args, context) => {
  return Author.findById(args.id)
}

const addAuthor = (root, args, context) => { 
  return Author.create(args)
}

export {
  loadAllAuthors,
  loadAuthor,
  addAuthor,
}
