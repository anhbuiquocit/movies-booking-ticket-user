import "./style.scss";
import React from "react";
import { SignupScence } from "./SignupScence";
import { useMutation } from "@apollo/client";
import { FormikHelpers } from "formik";
import { SIGN_UP } from "./Signup.grapql";
import { popup } from "@movie-ticket/tools";
import i18n from "@movie-ticket/translation";
const Signup = ({
  history,
  location,
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const [sign_up] = useMutation(SIGN_UP);
  const onSubmit = async (
    { firstname, lastname, username, password, birthday, email }: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    try {
      await sign_up({
        variables: {
          user: {
            firstname,
            lastname,
            username,
            password,
            birthday,
            email,
          },
        },
      });
      popup.success("Đăng ký thành công");
      setSubmitting(false);
      resetForm();
      history.push("/user/signin");
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return <SignupScence onSubmit={onSubmit} i18n={i18n} />;
};

export default Signup;
