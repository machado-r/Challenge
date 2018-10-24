import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
  {
    authors{
      _id
      name
      age
    }
  }
`

const booksQuery = gql`
  {
    books{
      _id
      title
      price
      author {
        name
        age
      }
    }
  }
`

const addBookMutation = gql`
  mutation($title: String!, $price: String!, $author: String!) {
    addBook(
      title: $title,
      price: $price ,
      author: $author, 
    ) {
      title
      price
    }
  }
`

const addUserMutation = gql`
  mutation($email: String!, $password: String!) {
    addUser(
      email: $email,
      password: $password,
    ) {
      email
    }
  }
`

const checkUserQuery = gql`
  query checkUserQuery($email: String!, $password: String!){
    checkUser(
      email: $email,
      password: $password
    ) {
      email
    }
  }
`

export {
  getAuthorsQuery,
  booksQuery,
  addBookMutation,
  addUserMutation,
  checkUserQuery,
}