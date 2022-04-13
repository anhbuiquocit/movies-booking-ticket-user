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
