import { gql } from "@apollo/client";
export const SHOWING_CONNECTION = gql`
  query ShowingConnection($where: ShowingWhereInput, $skip: Int, $take: Int) {
    showingConnection(where: $where, skip: $skip, take: $take) {
      id
      createdAt
      updatedAt
      startDate
      endDate
      startTime
      endTime
      price
      film {
        id
        name
      }
      room {
        name
        id
      }
    }
  }
`;

export const CREATE_SHOWING = gql`
  mutation CreateShowing($data: ShowingCreateInput!) {
    createShowing(data: $data) {
      id
      createdAt
    }
  }
`;
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

export const ROOM_CONNECTION = gql`
  query RoomConnection($where: RoomWhereInput) {
    roomConnection(where: $where) {
      id
      name
    }
  }
`;

export const SHOWING_AGGREGATE = gql`
  query ShowingAggregate($where: ShowingWhereInput) {
    ShowingAggregate(where: $where) {
      _count {
        _all
      }
    }
  }
`;
