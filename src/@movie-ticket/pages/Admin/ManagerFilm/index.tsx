import React, { useEffect } from "react";

import ManagerFilmScence from "./ManagerFilmScence";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import { FILM_CONNECTION } from "@movie-ticket/pages/User/Home/Home.graphql";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import { onChangePage } from "@movie-ticket/libs/commonFunction";
import queryString from "query-string";
import { useMutation, useQuery } from "@apollo/client";
import { FormikHelpers } from "formik";
import { DELETE_FILM } from "./ManagerFilm.graphql";
const ManagerFilm = ({
  history,
  location: { pathname, search },
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const {
    emailSearch = "",
    page = "1",
    rowsPerPage = "10",
  }: {
    emailSearch?: string;
    page?: string;
    rowsPerPage?: string;
    [x: string]: any;
  } = queryString.parse(search);
  const first = parseInt(rowsPerPage, 10);
  const skip = (parseInt(page, 10) - 1) * parseInt(rowsPerPage, 10);
  const [deleteFilm] = useMutation(DELETE_FILM);

  const { loading, error, data, refetch } = useQuery(FILM_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
      },
      skip: skip < 0 ? 0 : skip,
      take: first < 0 ? 10 : first,
    },
  });
  useEffect(() => {
    refetch();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error />;

  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Values: ", values);
    const { action } = values;
    if (action === "delete") {
      await deleteFilm({
        variables: {
          where: {
            id: values.filmId,
          },
        },
      });
    }
    refetch();
  };
  return (
    <ManagerFilmScence
      i18n={i18n}
      onSubmit={onSubmit}
      onChangePage={onChangePage(history, search)}
      rowsPerPage={parseInt(rowsPerPage)}
      search={search}
      history={history}
      data={data?.films}
    />
  );
};
export default ManagerFilm;
