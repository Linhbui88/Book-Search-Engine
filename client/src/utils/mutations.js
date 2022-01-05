import {gql} from '@apollo/client'

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`
export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, password:$password, email:$email) {
      token
      user {
        _id
        username
        email

      }
    }
  }
`
// // export const SAVE_BOOK = gql`
// //   mutation saveBook($_id: ID!, $book: BookInput! ) {
// //     saveBook(_id: $_id, book : $book) {
// //         username
// //         savedBook {
// //           title
        
// //       }
// //     }
// //   }
// // `
// // export const REMOVE_BOOK = gql `
// //   mutation removeBook($_id: ID!, $bookId : String!) {
// //     removeBook(id: _$id, bookId : $bookId ){
// //       username
// //       savedBooks {
// //         title
// //       }
// //     }
// //   }


// // `