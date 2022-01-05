import {gql} from '@apollo/client'

export const GET_ME =gql `
  query GetMe{
    me {
      uername
      savedBook {
        authors
        description
        image
        link
        title
      }
    }
  }
`