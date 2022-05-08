import { FormikHelpers } from "formik";
import React from "react";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import {
  uploadFileToS3,
  toBase64,
  uploadFileToS3UsingPresignUrl,
} from "@movie-ticket/libs";
import UserForm from "./UserForm";
import { CREATE_USER, CREATE_PRESIGN_URL } from "./ManagermentUser.graphql";
import { useApolloClient, useMutation } from "@apollo/client";
import axios from "axios";
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
  const client = useApolloClient();
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
      fileImage,
    } = values;

    try {
      const { data: dataPresignUrl } = await client.query({
        query: CREATE_PRESIGN_URL,
        variables: {
          file: fileImage[0].name,
        },
      });
      const preSignData = JSON.parse(dataPresignUrl.createPresignedS3);
      if (preSignData) {
        await uploadFileToS3UsingPresignUrl(preSignData, fileImage[0]);
      }

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
            image: fileImage[0].name,
          },
        },
      });

      popup.success("Tạo người dùng thành công");

      setSubmitting(false);
      resetForm();
      history.push(Router.managementUser);
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return <UserForm onSubmit={onSubmit} i18n={i18n} />;
};
export default CreateUser;
