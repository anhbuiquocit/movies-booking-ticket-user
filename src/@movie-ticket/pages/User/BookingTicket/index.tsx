import React from "react";
import "./style.scss";
import BookingTicketScence from "./BookingTicketScence";
import { useMutation, useQuery } from "@apollo/client";
import { FormikHelpers } from "formik";
import { convertLineSeatToArray, calculateMoney } from "@movie-ticket/libs";
import {
  ROOM_CONNECTION,
  FILMS,
  USER_BOOKING_TICKET,
} from "./BookingTicket.graphql";

import Loading from "@movie-ticket/components/Loading";
import { popup } from "@movie-ticket/tools";
import i18n from "@movie-ticket/translation";
import Error from "@movie-ticket/components/Error";
import queryString from "query-string";
const BookingTicket = ({
  history,
  location: { search },
  match: {
    params: { filmId },
  },
}: {
  history: any;
  location: any;
  match: any;
}): JSX.Element => {
  let { date, time } = queryString.parse(search);
  console.log("date in search dataa: ", date);
  const { loading, error, data } = useQuery(FILMS, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
        id: {
          equals: filmId,
        },
      },
    },
  });
  const {
    loading: roomLoading,
    error: roomError,
    data: roomData,
  } = useQuery(ROOM_CONNECTION, {
    variables: {
      deletedAt: {
        equals: null,
      },
    },
  });
  const [userBoookingTicket] = useMutation(USER_BOOKING_TICKET);
  if (loading || roomLoading) return <Loading />;
  if (error || roomError || (!data.films && data.films.length === 0))
    return <Error />;
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("valuessss in function book: ", values);
    const {
      lineSeat0,
      lineSeat1,
      lineSeat2,
      lineSeat3,
      lineSeat4,
      lineSeat5,
      lineSeat6,
      lineSeat7,
      room,
      show,
      date,
    } = values;
    const arrayCommon = convertLineSeatToArray(
      lineSeat0,
      lineSeat1,
      lineSeat2,
      lineSeat3,
      lineSeat4,
      lineSeat5,
      lineSeat6,
      lineSeat7
    );
    try {
      await userBoookingTicket({
        variables: {
          data: {
            showingId: show.id,
            roomId: room.id,
            amount: 1,
            price: calculateMoney(
              show.price,
              lineSeat0,
              lineSeat1,
              lineSeat2,
              lineSeat3,
              lineSeat4,
              lineSeat5,
              lineSeat6,
              lineSeat7
            ),
            listSeat: JSON.stringify(arrayCommon),
          },
        },
      });
      popup.success(i18n.t("main.bookingTicket.booksucessfully"));
      setSubmitting(false);
      resetForm();
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  console.log("Data film: ", data);
  return (
    <BookingTicketScence
      onSubmit={onSubmit}
      roomData={roomData?.roomConnection}
      film={data?.films[0]}
      i18n={i18n}
    />
  );
};

export default BookingTicket;
