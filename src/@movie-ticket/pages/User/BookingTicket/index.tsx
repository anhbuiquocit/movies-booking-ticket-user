import React from "react";
import "./style.scss";
import BookingTicketScence from "./BookingTicketScence";
import { FormikHelpers } from "formik";
const BookingTicket = ({
  history,
  location,
  match,
}: {
  history: any;
  location: any;
  match: any;
}): JSX.Element => {
  const onSubmit = (values: any, {}: FormikHelpers<any>) => {
    console.log(values);
  };
  return <BookingTicketScence onSubmit={onSubmit} />;
};

export default BookingTicket;
