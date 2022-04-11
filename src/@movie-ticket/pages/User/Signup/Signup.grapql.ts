import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation Signup($user: UserCreateInput!) {
    signup(user: $user)
  }
`;
