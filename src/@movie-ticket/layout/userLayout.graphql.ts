import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query QueryMe {
  queryMe {
    firstname
    lastname
    birthday
    address
    email
    password
    username
    active
    point
    phone
  }
}
`