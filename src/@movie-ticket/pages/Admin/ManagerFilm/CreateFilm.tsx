import FilmForm from "./FilmForm";
import React from "react";
import { FormikHelpers } from "formik";
import i18n from "@movie-ticket/translation";
import { CREATE_FILM } from "./ManagerFilm.graphql";
import { popup } from "@movie-ticket/tools";
import { useApolloClient, useMutation } from "@apollo/client";
import { uploadFileToS3UsingPresignUrl } from "@movie-ticket/libs";
import { CREATE_PRESIGN_URL } from "@movie-ticket/pages/Admin/ManagementUser/ManagermentUser.graphql";
import Router from "@movie-ticket/routers/router";
import { isFulfilled } from "@reduxjs/toolkit";
const CreateFilm = ({
  history,
  location,
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const client = useApolloClient();
  const [createFilm] = useMutation(CREATE_FILM);
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    const {
      trailler,
      name,
      description,
      director,
      actor,
      time,
      image,
      image1,
      image2,
      image3,
    } = values;
    const listImage: any = [];
    listImage.push(image);
    listImage.push(image1);
    listImage.push(image2);
    listImage.push(image3);
    try {
      for (let i = 0; i < listImage.length; i++) {
        if (listImage[i]) {
          const { data: dataPresignUrl } = await client.query({
            query: CREATE_PRESIGN_URL,
            variables: {
              file: listImage[i].name,
            },
          });
          const preSignData = JSON.parse(dataPresignUrl.createPresignedS3);
          if (preSignData) {
            await uploadFileToS3UsingPresignUrl(preSignData, listImage[i]);
          }
        }
      }
      await createFilm({
        variables: {
          data: {
            trailler,
            name,
            description,
            director,
            actor,
            time,
            image: image && image.name ? image.name : null,
            imageDescription1: image1 && image1.name ? image1.name : null,
            imageDescription2: image2 && image2.name ? image2.name : null,
            imageDescription3: image3 && image3.name ? image3.name : null,
          },
        },
      });

      popup.success("Tạo phim thành công");
      setSubmitting(false);
      resetForm();
      history.push(Router.managerFilm);
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return <FilmForm onSubmit={onSubmit} i18n={i18n} isCreate />;
};

export default CreateFilm;
