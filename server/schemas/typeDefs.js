const {gql} = require('apollo-server-express');

const typeDefs =gql`

type User {
  _id: ID
  username: String !
  email: String!
  password: String!
  savedBooks: [Book]
}
type Book {
  _id: ID
  bookId: String!
  author :[String]
  description: String!
  image: String
  link: String
  title: String!

}



type Auth {
  token
  user: User
}
type Query {
  me: User
}
input ListUsersInput{
  author: [String]
  description: String!
  image: String
  link: String
  title: String!
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!) :Auth
  saveBook(params: ListUsersInput) :User
  removeBook(bookId: String!) :User
}


`
module.exports = typeDefs