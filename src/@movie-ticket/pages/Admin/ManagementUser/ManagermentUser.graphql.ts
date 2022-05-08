import { gql } from "@apollo/client";

export const USER_CONNECTION = gql`
  query UsersConnection($where: UserWhereInput, $skip: Int, $take: Int) {
    UsersConnection(where: $where, skip: $skip, take: $take) {
      id
      firstname
      lastname
      birthday
      createAt
      address
      email
      username
      active
      point
      phone
      role
      image
    }
  }
`;

export const CREATE_USER = gql`
  mutation Mutation($user: UserCreateInput!) {
    createUser(user: $user) {
      username
      password
      email
      birthday
      lastname
      firstname
      active
      role
      image
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where)
  }
`;

export const USER_AGGREGATE = gql`
  query UserAggregate($where: UserWhereInput) {
    UserAggregate(where: $where) {
      _count {
        _all
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation($where: UserWhereUniqueInput!) {
    deleteUser(where: $where)
  }
`;

export const CREATE_PRESIGN_URL = gql`
  query Query($file: String!) {
    createPresignedS3(file: $file)
  }
`;

export const GET_IMAGE_URL = gql`
  mutation GetImageUrl($key: String!) {
    imageUrl(key: $key)
  }
`;
