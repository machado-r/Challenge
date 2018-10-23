import * as UserLoader from './UserLoader';

export const typeDefs = `
  type User {
    email: String
    password: String
  }
`;

export const resolvers = {
  checkUser: (...args) => UserLoader.checkUser(...args),
  
};

export const mutations = {
  addUser: (...args) => UserLoader.addUser(...args),
}


