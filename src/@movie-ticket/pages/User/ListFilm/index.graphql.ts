import { gql } from "@apollo/client";

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
