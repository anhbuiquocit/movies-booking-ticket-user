import { FormikHelpers } from "formik";
import React from "react";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import UserForm from "./UserForm";
import { CREATE_USER } from "./ManagermentUser.graphql";
import { useMutation } from "@apollo/client";
import Router from "@movie-ticket/routers/router";
const CreateUser = ({
  history,
  location,
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const [createUser] = useMutation(CREATE_USER);
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
    } = values;
    try {
      await createUser({
        variables: {
          user: {
            username,
            password,
            email,
            birthday,
            lastname,
            firstname,
            active,
            role,
          },
        },
      });
      popup.success(i18n.t("main.bookingTicket.booksucessfully"));

      setSubmitting(false);
      resetForm();
      history.push(Router.managementUser);
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
    console.log("Values: ", values);
  };
  return <UserForm onSubmit={onSubmit} i18n={i18n} />;
};
export default CreateUser;
