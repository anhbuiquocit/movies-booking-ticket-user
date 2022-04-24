import { gql } from "@apollo/client";

export const ROOM_CONNECTION = gql`
  query RoomConnection($where: RoomWhereInput) {
    roomConnection(where: $where) {
      id
      name
    }
  }
`;

export const FILMS = gql`
  query Films($where: FilmWhereInput) {
    films(where: $where) {
      id
      createdAt
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
      Showing {
        id
        startDate
        endDate
        startTime
        endTime
        price
      }
    }
  }
`;

export const USER_BOOKING_TICKET = gql`
  mutation UserBookingTicket($data: BookingItemInput!) {
    userBookingTicket(data: $data)
  }
`;
