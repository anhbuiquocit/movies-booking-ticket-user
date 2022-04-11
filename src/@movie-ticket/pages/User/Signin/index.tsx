import SigninScence from "./SigninScence";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FormikHelpers } from "formik";
import { popup } from "@movie-ticket/tools";
import { SIGN_IN } from "./Signin.graphql";
import { Redirect } from "react-router-dom";
export interface Inputs {
  username: string;
  password: string;
}
const Signin = ({
  history,
  match,
  location,
}: {
  match: any;
  history: any;
  location: any;
}): JSX.Element => {
  const [userSignin] = useMutation(SIGN_IN);
  const onSubmit = async (
    { username, password }: { username: string; password: string },
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    try {
      const result = await userSignin({
        variables: {
          userInput: {
            username,
            password,
          },
        },
      });
      if (result?.data.login.access_token) {
        localStorage.setItem("user_token", result.data.login.access_token);
        history.push("/");
        popup.success("Đăng nhập thành công");
      }
      setSubmitting(false);
      console.log(result);
      resetForm();
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return <SigninScence onSubmit={onSubmit} />;
};
export default Signin;
