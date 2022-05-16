import React from "react";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import Error from "@movie-ticket/components/Error";
import Loading from "@movie-ticket/components/Loading";
import ShowingForm from "./ShowingForm";
import {
  FILMS_CONNECTION,
  ROOM_CONNECTION,
  SHOWING_CONNECTION,
} from "./ManagerShowing.graphql";
import { FormikHelpers } from "formik";

const DetailShowingManagement = ({
  history,
  location: { pathname, search },
  match: {
    params: { id },
  },
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const { loading, error, data } = useQuery(SHOWING_CONNECTION, {
    variables: {
      where: {
        id: {
          equals: id,
        },
        deletedAt: {
          equals: id,
        },
      },
    },
  });
  const {
    loading: filmLoading,
    error: filmError,
    data: filmData,
  } = useQuery(FILMS_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
      },
    },
  });
  const {
    loading: roomoading,
    error: roomError,
    data: roomData,
  } = useQuery(ROOM_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
      },
    },
  });
  if (loading || filmLoading || roomoading) return <Loading />;
  if (filmError || roomError || error) return <Error />;
  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Valueees: ", values);
  };
  return (
    <ShowingForm
      i18n={i18n}
      onSubmit={onSubmit}
      isCreate={false}
      films={filmData.films}
      rooms={roomData.roomConnection}
      data={data?.showingConnection[0]}
    />
  );
};

export default DetailShowingManagement;
