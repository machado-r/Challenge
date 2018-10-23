import User from './UserModel';

const ObjectId = require('mongoose').Types.ObjectId;
ObjectId.prototype.valueOf = function () {
  return this.toString();
};

const addUser = (root, args, context) => {
  return User.create(args);
}

const checkUser = (root, args, context) => {
  return User.findOne({ email: args.email, password: args.password});
}

export {
  addUser,
  checkUser,
}
