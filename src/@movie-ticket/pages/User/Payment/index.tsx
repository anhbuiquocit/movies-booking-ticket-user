import "./style.scss";
import PaymentScence from "./PaymentScence";
import { FormikHelpers } from "formik";
import i18n from "@movie-ticket/translation";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import { useMutation, useQuery } from "@apollo/client";
import { popup } from "@movie-ticket/tools";
import queryString from "query-string";
import { BOOKING_CONNECTION } from "./index.graphql";
const PagePayment = ({
  history,
  location: { search },
  match: {
    params: { id },
  },
}: {
  history: any;
  location: any;
  match: any;
}): JSX.Element => {
  const { loading, error, data } = useQuery(BOOKING_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
        id: {
          equals: id,
        },
      },
    },
  });
  if (loading) return <Loading />;
  if (
    error ||
    (!data && !data.bookingConnection && data.bookingConnection.length === 0)
  )
    return <Error />;
  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Valuesss: ", values);
  };
  return (
    <PaymentScence
      onSubmit={onSubmit}
      i18n={i18n}
      data={data?.bookingConnection[0]}
    />
  );
};

export default PagePayment;
