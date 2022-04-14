import "./style.scss";
import React, { FC } from "react";
import { UserDetailScence } from "./UserDetailScence";
import { FormikHelpers } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import { popup } from "@movie-ticket/tools";
import i18n from "@movie-ticket/translation";
import { QUERY_ME, UPDATE_USER } from "./UserDetail.graphql";

const UserDetail: FC<{ history: any; location: any; match: any }> = ({
  history,
  location,
  match,
}) => {
  const { loading, error, data, refetch } = useQuery(QUERY_ME);
  const [updateUser] = useMutation(UPDATE_USER);
  if (loading) return <Loading />;
  if (error) return <Error />;
  const { queryMe: userData } = data;
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    const {
      firstname,
      lastname,
      birthday,
      address,
      email,
      username,
      point,
      phone,
    } = values;
    try {
      await updateUser({
        variables: {
          where: {
            id: userData.id,
          },
          data: {
            firstname: {
              set: firstname,
            },
            lastname: {
              set: lastname,
            },
            birthday: {
              set: birthday,
            },
            address: {
              set: address,
            },
            email: {
              set: email,
            },
            username: {
              set: username,
            },
            point: {
              set: point,
            },
            phone: {
              set: phone,
            },
          },
        },
      });
      refetch();
      popup.success(i18n.t("main.userDetail.updateSuccess"));
      setSubmitting(false);
      resetForm();
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return (
    <UserDetailScence onSubmit={onSubmit} i18n={i18n} userData={userData} />
  );
};

export default UserDetail;
