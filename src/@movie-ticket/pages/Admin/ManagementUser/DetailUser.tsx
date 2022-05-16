import React from "react";
import UserForm from "./UserForm";
import i18n from "@movie-ticket/translation";
import { FormikHelpers } from "formik";
import {
  UPDATE_USER,
  USER_CONNECTION,
  CREATE_PRESIGN_URL,
} from "./ManagermentUser.graphql";
import { uploadFileToS3UsingPresignUrl } from "@movie-ticket/libs";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
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
  const client = useApolloClient();
  const { loading, error, data } = useQuery(USER_CONNECTION, {
    variables: {
      where: {
        id: {
          equals: id,
        },
        deletedAt: {
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
      if (fileImage) {
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
      } else {
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
            },
          },
        });
      }
      popup.success(i18n.t("main.updateSuccessful"));

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
