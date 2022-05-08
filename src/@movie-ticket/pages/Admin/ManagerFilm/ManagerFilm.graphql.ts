import { gql } from "@apollo/client";
export const FILMS_CONNECTION = gql`
  query Films($where: FilmWhereInput) {
    films(where: $where) {
      id
      trailler
      name
      description
      director
      actor
      time
      image
      imageDescription1
      imageDescription2
      imageDescription3
    }
  }
`;

export const CREATE_FILM = gql`
  mutation CreateFilmRecord($data: FilmCreateInput!) {
    createFilmRecord(data: $data) {
      trailler
      name
      description
      director
      actor
      time
      image
      imageDescription1
      imageDescription2
      imageDescription3
    }
  }
`;
