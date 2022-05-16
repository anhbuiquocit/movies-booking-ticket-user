import { onChangePage } from "@movie-ticket/libs/commonFunction";
import Error from "@movie-ticket/components/Error";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import { ACTION } from "@movie-ticket/constant";
import { FormikHelpers } from "formik";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import React, { FC, useEffect, useState } from "react";
import queryString from "query-string";
import ManageShowingScence from "./ManageShowingScence";
import {
  SHOWING_CONNECTION,
  SHOWING_AGGREGATE,
} from "./ManagerShowing.graphql";
const ManageShowing = ({
  history,
  location: { pathname, search },
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const {
    // emailSearch = "",
    page = "1",
    rowsPerPage = "10",
  }: {
    // emailSearch?: string;
    page?: string;
    rowsPerPage?: string;
    [x: string]: any;
  } = queryString.parse(search);
  const first = parseInt(rowsPerPage, 10);
  const skip = (parseInt(page, 10) - 1) * parseInt(rowsPerPage, 10);
  const { loading, error, data } = useQuery(SHOWING_CONNECTION, {
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
  const { data: aggregateData } = useQuery(SHOWING_AGGREGATE, {
    variables: {
      deleteAt: {
        equals: null,
      },
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error />;

  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("values: ", values);
  };
  const { showingConnection } = data;
  return (
    <ManageShowingScence
      i18n={i18n}
      onSubmit={onSubmit}
      showingCount={parseInt(aggregateData?.ShowingAggregate._count._all)}
      data={showingConnection}
      onChangePage={onChangePage(history, search)}
      rowsPerPage={parseInt(rowsPerPage)}
      history={history}
      search={search}
    />
  );
};

export default ManageShowing;
