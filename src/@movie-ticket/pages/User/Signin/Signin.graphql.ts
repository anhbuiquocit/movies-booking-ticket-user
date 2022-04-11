import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation Login($userInput: LoginUserInput!) {
    login(userInput: $userInput) {
      access_token
    }
  }
`;
