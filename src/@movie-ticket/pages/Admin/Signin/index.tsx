import React, { FC } from "react";
import { FormikHelpers } from "formik";
import SigninScence from "./SigninScence";
import { ADMIN_SIGNIN } from "./Signin.graphql";
import { useMutation } from "@apollo/client";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import { ADMIN_TOKEN_KEY } from "@movie-ticket/constant";
const Signin: FC<{
  match: any;
  history: any;
  location: any;
}> = ({ history, match, location }): JSX.Element => {
  const [adminSignin] = useMutation(ADMIN_SIGNIN);
  const onSubmit = async (
    { username, password }: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    try {
      const result = await adminSignin({
        variables: {
          data: {
            username,
            password,
          },
        },
      });
      
      if (result?.data.adminLogin.access_token) {
        localStorage.setItem(
          ADMIN_TOKEN_KEY,
          result.data.adminLogin.access_token
        );
        history.push("/admin");
        popup.success("Đăng nhập thành công");
      }
      setSubmitting(false);
      resetForm();
    } catch (err) {
      popup.error(err);
      
      setSubmitting(false);
    }
  };
  return <SigninScence onSubmit={onSubmit} />;
};

export default Signin;
