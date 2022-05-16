import FilmForm from "./FilmForm";
import React from "react";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import { FormikHelpers } from "formik";
import { FILMS_CONNECTION } from "./ManagerFilm.graphql";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
const DetailFilmManagement = ({
  history,
  location,
  match: {
    params: { id },
  },
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const { loading, error, data } = useQuery(FILMS_CONNECTION, {
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
  if (error) return <Error />;
  console.log("data: ", data);

  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {};
  return (
    <FilmForm
      onSubmit={onSubmit}
      i18n={i18n}
      isCreate={false}
      data={data?.films[0]}
    />
  );
};

export default DetailFilmManagement;
