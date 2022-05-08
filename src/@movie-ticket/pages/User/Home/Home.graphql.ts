import { gql } from "@apollo/client";

export const GET_LIST_FILM = gql`
  query Films($filmInput: FilmWhereInput) {
    films(filmInput: $filmInput) {
      id
      createdAt
      updatedAt
      deletedAt
      name
      trailler
      description
      director
      time
      actor
    }
  }
`;

export const FILM_CONNECTION = gql`
  query FilmConnection($where: FilmWhereInput) {
    films(where: $where) {
      trailler
      name
      description
      director
      actor
      time
      image
      id
    }
  }
`;

export const GET_IMAGE_URL = gql`
  mutation GetImageUrl($key: String!) {
    imageUrl(key: $key)
  }
`;
