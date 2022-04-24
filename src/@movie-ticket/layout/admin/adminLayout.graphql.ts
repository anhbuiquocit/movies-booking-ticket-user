import { gql } from "@apollo/client";

export const ADMIN_QUERY_ME = gql`
  query AdminQueryMe {
    adminQueryMe {
      id
      firstname
      lastname
      birthday
      address
      email
      password
      username
      phone
    }
  }
`;
