import { gql } from "@apollo/client";
export const FILM = gql`
  query Film($where: FilmWhereUniqueInput!) {
    film(where: $where) {
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

export const ADD_COMMENT = gql`
  mutation AddComment($data: FilmReivew!) {
    addComment(data: $data)
  }
`;

export const COMMENT_CONNECTION = gql`
  query ReviewFilmsConnection($where: ReviewFilmWhereInput) {
    reviewFilmsConnection(where: $where) {
      id
      user {
        firstname
        lastname
      }
      userId
      comment
      film {
        name
      }
    }
  }
`;

export const CHECK_AVAILABLE_SHOWING = gql`
  mutation CheckAvailableShowing($filmId: String!) {
    checkAvailableShowing(filmId: $filmId)
  }
`;
