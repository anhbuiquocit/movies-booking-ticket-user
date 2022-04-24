import React, { FC } from "react";
import ManagermentUserScence from "./ManagermentUserScence";
import {
  USER_CONNECTION,
  USER_AGGREGATE,
  DELETE_USER,
} from "./ManagermentUser.graphql";
import { onChangePage } from "@movie-ticket/libs/commonFunction";
import Error from "@movie-ticket/components/Error";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import { ACTION } from "@movie-ticket/constant";
import { FormikHelpers } from "formik";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import queryString from "query-string";
const ManagementUser = ({
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
  console.log("page: ", page);
  console.log("first", typeof first);
  console.log("skip: ", skip);
  const [deleteUser] = useMutation(DELETE_USER);
  const { loading, error, data, refetch } = useQuery(USER_CONNECTION, {
    variables: {
      where: {
        deleteAt: null,
        OR: [
          {
            email: {
              contains: emailSearch,
            },
          },
        ],
      },
      skip: skip < 0 ? 0 : skip,
      take: first < 0 ? 10 : first,
    },
  });
  const { data: aggregateData } = useQuery(USER_AGGREGATE, {
    variables: {
      deleteAt: {
        equals: null,
      },
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error />;
  console.log("aggregateData: ", aggregateData?.UserAggregate._count._all);
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    const { action, idUser } = values;
    try {
      if (action === ACTION.DELETE) {
        await deleteUser({
          variables: {
            where: {
              id: idUser,
            },
          },
        });
        popup.success(i18n.t("main.notification.deleteUserSuccess"));
      }
      refetch();
      setSubmitting(false);
      resetForm();
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  console.log("data: ", data);
  return (
    <ManagermentUserScence
      users={data?.UsersConnection}
      userCount={parseInt(aggregateData?.UserAggregate._count._all)}
      i18n={i18n}
      onSubmit={onSubmit}
      onChangePage={onChangePage(history, search)}
      rowsPerPage={parseInt(rowsPerPage)}
      history={history}
      search={search}
    />
  );
};

export default ManagementUser;
