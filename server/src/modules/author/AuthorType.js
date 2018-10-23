import * as AuthorLoader from './AuthorLoader';

export const typeDefs = `
  type Author {
    _id: ID
    name: String
    age: Int
  }

  input AuthorInput {
    name: String!
    age: Int!
  }

`;

export const resolvers = {
  authors: () => AuthorLoader.loadAllAuthors(),
  author: (...args) => AuthorLoader.loadAuthor(...args),
};

export const mutations = {
  addAuthor: (...args) => AuthorLoader.addAuthor(...args),
};
