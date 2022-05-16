import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query QueryMe {
    queryMe {
      id
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
      image
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser(where: $where, data: $data)
  }
`;

export const GET_IMAGE_URL = gql`
  mutation GetImageUrl($key: String!) {
    imageUrl(key: $key)
  }
`;
