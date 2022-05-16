import React, { FC, useEffect, useState } from "react";
import ManagerPromotionScence from "./ManagerPromotionScence";
import { FormikHelpers } from "formik";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import queryString from "query-string";
import { onChangePage } from "@movie-ticket/libs/commonFunction";
import Error from "@movie-ticket/components/Error";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import {
  PROMOTION_CONNECTION,
  PROMOTION_AGGREGATE,
  CREATE_PROMOTION,
} from "./index.graphql";
const PromotionManage = ({
  history,
  location: { pathname, search },
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const {
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
  const { loading, error, data, refetch } = useQuery(PROMOTION_CONNECTION, {
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
  const { data: aggregateData } = useQuery(PROMOTION_AGGREGATE, {
    variables: {
      deleteAt: {
        equals: null,
      },
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error />;
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    
    console.log("Values: ", values);
  };
  return (
    <ManagerPromotionScence
      i18n={i18n}
      onSubmit={onSubmit}
      countRecord={parseInt(aggregateData?.promotionAggregate._count._all)}
      onChangePage={onChangePage(history, search)}
      rowsPerPage={parseInt(rowsPerPage)}
      history={history}
      data={data?.promotionConnection}
    />
  );
};
export default PromotionManage;
