import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import * as BookType from './src/modules/book/BookType';
import * as AuthorType from './src/modules/author/AuthorType';
import * as UserType from './src/modules/User/UserType';

// connect to mlab
mongoose.connect('mongodb://machador:f0t0nchallenge@ds121373.mlab.com:21373/foton', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log("db connected");
});

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
  
  type Query {
    books: [Book]
    authors: [Author]
    author(id: ID): Author
    checkUser(email: String!, password: String!): User
  }

  type Mutation {
    addBook (title: String!, price: String!, author: String!) : Book
    addAuthor (name: String!, age: Int!) : Author
    addUser (email: String!, password: String!) : User
  }
  
`;

const typeDefs = [
  BookType.typeDefs,
  AuthorType.typeDefs,
  UserType.typeDefs,
];

const resolvers = {
  Query: {
    ...BookType.resolvers,
    ...AuthorType.resolvers,   
    ...UserType.resolvers,   
  },
  Mutation: {
    ...BookType.mutations,
    ...AuthorType.mutations,
    ...UserType.mutations
  }
};

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
});


const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
