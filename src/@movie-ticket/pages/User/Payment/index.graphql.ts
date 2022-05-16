import { gql } from "@apollo/client";
export const BOOKING_CONNECTION = gql`
  query BookingConnection($where: BookingWhereInput) {
    bookingConnection(where: $where) {
      id
      createdAt
      updatedAt
      user {
        id
        email
        username
      }
      amount
      price
      promotion {
        id
        code
        createdAt
        discount
        maxDiscount
        startDate
        endDate
        startTime
        endTime
      }
      isPayment
      lineSeatMatrix
      bookingItem {
        id
        seat {
          id
          name
        }
        showing {
          id
          film {
            id
            name
          }
          price
          startDate
          endDate
          startTime
          endTime
          
        }
      }
    }
  }
`;
