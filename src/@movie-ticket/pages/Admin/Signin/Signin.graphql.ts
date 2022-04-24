import { gql } from "@apollo/client";

export const ADMIN_SIGNIN = gql`
  mutation AdminLogin($data: LoginUserInput!) {
    adminLogin(data: $data) {
      access_token
      admin {
        id
        firstname
        lastname
        birthday
        email
        password
        username
      }
    }
  }
`;
