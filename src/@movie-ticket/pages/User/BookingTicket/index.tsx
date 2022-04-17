import React from "react";
import "./style.scss";
import BookingTicketScence from "./BookingTicketScence";
import { useQuery } from "@apollo/client";
import { FormikHelpers } from "formik";
import { convertLineSeatToArray } from "@movie-ticket/libs";
import { ROOM_CONNECTION, FILMS } from "./BookingTicket.graphql";
import Loading from "@movie-ticket/components/Loading";
import { popup } from "@movie-ticket/tools";
import Error from "@movie-ticket/components/Error";
const BookingTicket = ({
  history,
  location,
  match: {
    params: { filmId },
  },
}: {
  history: any;
  location: any;
  match: any;
}): JSX.Element => {
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
  if (loading || roomLoading) return <Loading />;
  if (error || roomError || (!data.films && data.films.length === 0))
    return <Error />;
  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    const {
      lineSeat0,
      lineSeat1,
      lineSeat2,
      lineSeat3,
      lineSeat4,
      lineSeat5,
      lineSeat6,
      lineSeat7,
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
    console.log("arrayCommon: ", JSON.stringify(arrayCommon));
    try {
      console.log("Valuesss", values);
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
    />
  );
};

export default BookingTicket;
