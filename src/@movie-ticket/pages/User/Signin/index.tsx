import SigninScence from "./SigninScence";
import React from "react";
// import { Inputs } from "./SigninScence";
import { useForm, useWatch } from "react-hook-form";
import { FormikHelpers } from "formik";

export interface Inputs {
  username: string;
  password: string;
}
const Signin = (): JSX.Element => {
  const onHandleSubmit = async (
    { username, password }: Inputs,
    { setSubmitting }: FormikHelpers<any>
  ) => {
    console.log("Click on button submit");
    // console.log("data when submit: ", data);
  };
  return <SigninScence onSubmit={onHandleSubmit} />;
};
export default Signin;
