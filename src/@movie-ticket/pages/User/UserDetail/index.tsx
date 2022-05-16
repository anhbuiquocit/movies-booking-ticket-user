import "./style.scss";
import React, { FC, useEffect, useState } from "react";
import { UserDetailScence } from "./UserDetailScence";
import { FormikHelpers } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import { User } from "@movie-ticket/constant/modal";
import Error from "@movie-ticket/components/Error";
import { popup } from "@movie-ticket/tools";
import i18n from "@movie-ticket/translation";
import _ from "lodash";
import { QUERY_ME, UPDATE_USER, GET_IMAGE_URL } from "./UserDetail.graphql";

const UserDetail: FC<{ history: any; location: any; match: any }> = ({
  history,
  location,
  match,
}) => {
  const { loading, error, data, refetch } = useQuery(QUERY_ME);
  const [updateUser] = useMutation(UPDATE_USER);
  const [getImageUrl] = useMutation(GET_IMAGE_URL);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    // let tempList: Array<User> = [];
    // if (data && data.films && data.films.length > 0) {
    //   for (let i = 0; i < data.films.length; i++) {
    //     const tempItem: User = Object.assign({}, data.films[i], {
    //       imageUrl: null,
    //     });
    //     tempList.push(tempItem);
    //   }

    //   for (let i = 0; i < tempList.length; i++) {
    //     getUrlImage(tempList[i].image, (fileUrl) => {
    //       tempList[i].imageUrl = fileUrl;
    //     });
    //   }
    // }
    // tempList = _.uniqBy(tempList, "id");
    if (data && data.queryMe) {
      let tempUser: User = Object.assign({}, data.queryMe, {
        imageUrl: null,
      });

      getUrlImage(tempUser.image, (fileUrl) => {
        tempUser.imageUrl = fileUrl;
      });
      
      setUser(tempUser);
    }
  }, [data]);
  if (loading) return <Loading />;
  if (error) return <Error />;
  const getUrlImage = async (key, callback) => {
    if (!key) callback(null);
    try {
      const {
        data: { imageUrl },
      } = await getImageUrl({
        variables: {
          key,
        },
        fetchPolicy: "network-only",
      });

      callback(imageUrl);
    } catch (error) {
      callback(null);
    }
  };
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
    <UserDetailScence onSubmit={onSubmit} i18n={i18n} userData={user} />
  );
};

export default UserDetail;
