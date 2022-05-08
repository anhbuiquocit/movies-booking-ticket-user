import React from "react";
import UserForm from "./UserForm";
import i18n from "@movie-ticket/translation";
import { FormikHelpers } from "formik";
import { UPDATE_USER, USER_CONNECTION } from "./ManagermentUser.graphql";
import { useMutation, useQuery } from "@apollo/client";
import { popup } from "@movie-ticket/tools";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
const DetailUser = ({
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
  
  const { loading, error, data } = useQuery(USER_CONNECTION, {
    variables: {
      where: {
        id: {
          equals: id,
        },
      },
    },
  });
  const [updateUser] = useMutation(UPDATE_USER);
  if (loading) return <Loading />;
  if (error) return <Error />;
  
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    
    const {
      username,
      password,
      email,
      birthday,
      lastname,
      firstname,
      active,
      role,
      fileImage,
    } = values;
    try {
      await updateUser({
        variables: {
          where: { id },
          data: {
            username: {
              set: username,
            },
            email: {
              set: email,
            },
            birthday: {
              set: birthday,
            },
            lastname: {
              set: lastname,
            },
            firstname: {
              set: firstname,
            },
            active: {
              set: active,
            },
            role: {
              set: role,
            },
            image: {
              set: fileImage,
            },
          },
        },
      });
      popup.success("Cập nhật thành công");

      setSubmitting(false);
      resetForm();
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return (
    <UserForm
      onSubmit={onSubmit}
      i18n={i18n}
      userData={data?.UsersConnection[0]}
      isDetailUser
    />
  );
};
export default DetailUser;
