import React, { FC, useEffect, useState } from "react";
import ManagermentUserScence from "./ManagermentUserScence";
import {
  USER_CONNECTION,
  USER_AGGREGATE,
  DELETE_USER,
  GET_IMAGE_URL,
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
import { User } from "@movie-ticket/constant/modal";
import _ from "lodash";
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
  const [listUser, setListUser] = useState<User[]>();
  const first = parseInt(rowsPerPage, 10);
  const skip = (parseInt(page, 10) - 1) * parseInt(rowsPerPage, 10);
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
  const [getImageUrl] = useMutation(GET_IMAGE_URL);
  const getUrlImage = async (key, callback) => {
    if (!key) callback(null);
    try {
      const {
        data: { imageUrl },
      } = await getImageUrl({
        variables: {
          key,
        },
      });

      callback(imageUrl);
    } catch (error) {
      callback(null);
    }
  };
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    let tempList: Array<User> = [];
    if (data && data.UsersConnection && data.UsersConnection.length > 0) {
      for (let i = 0; i < data.UsersConnection.length; i++) {
        const tempItem: User = Object.assign({}, data.UsersConnection[i], {
          imageUrl: null,
        });
        tempList.push(tempItem);
        // getUrlImage(data.UsersConnection[i]["image"], (fileUrl) => {
        //   // data.UsersConnection[i].imageUrl = fileUrl;
        //   const tempItem: User = Object.assign({}, data.UsersConnection[i], {
        //     imageUrl: fileUrl,
        //   });
        //   tempList.push(tempItem);
        // });
      }

      for (let i = 0; i < tempList.length; i++) {
        getUrlImage(tempList[i].image, (fileUrl) => {
          tempList[i].imageUrl = fileUrl;
        });
      }
    }
    // data.UsersConnection = tempList;
    tempList = _.uniqBy(tempList, "id");
    // data.UsersConnection = Object.assign({}, tempList);
    setListUser(tempList);
  }, [data]);
  if (loading) return <Loading />;
  if (error) return <Error />;

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

  return (
    <ManagermentUserScence
      users={listUser}
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
