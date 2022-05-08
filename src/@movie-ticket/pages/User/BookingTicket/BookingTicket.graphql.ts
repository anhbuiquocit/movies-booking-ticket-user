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

export const GET_AVAILABLE_BOOKING_TICKET = gql`
  query BookingConnection($where: BookingWhereInput) {
    bookingConnection(where: $where) {
      id
      amount
      price
      lineSeatMatrix
      createdAt
      updatedAt
      user {
        id
        email
      }
    }
  }
`;

export const SHOWING_CONNECTION = gql`
  query ShowingConnection($where: ShowingWhereInput) {
    showingConnection(where: $where) {
      id
      createdAt
      updatedAt
      startDate
      endDate
      startTime
      endTime
      price
    }
  }
`;
