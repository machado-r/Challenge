import * as BookLoader from './BookLoader';

export const typeDefs = `
  type Book {
    _id: ID
    title: String
    author: Author
    price: String
  }
`;

export const resolvers = {
  books: () => BookLoader.loadAllBooks(),
};

export const mutations = {
  addBook: (...args) =>  BookLoader.addBook(...args),
}


