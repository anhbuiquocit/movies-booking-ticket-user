import React, { FC, useEffect, useState } from "react";
import { DetailFilmScence } from "./DetailFilmScence";
import "./style.scss";
import {
  FILM,
  ADD_COMMENT,
  COMMENT_CONNECTION,
  CHECK_AVAILABLE_SHOWING,
} from "./DetailFilm.graphql";
import { useMutation, useQuery } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import i18n from "@movie-ticket/translation";
import { FormikHelpers } from "formik";
import { GET_IMAGE_URL } from "../Home/Home.graphql";
import { popup } from "@movie-ticket/tools";
import queryString from "query-string";
import Routers from "@movie-ticket/routers/router";
import { Film } from "@movie-ticket/constant/modal";
import Router from "@movie-ticket/routers/router";
const DetailFilm: FC<{ match: any; location: any; history: any }> = ({
  history,
  location: { pathname, search },
  match: {
    params: { id },
  },
}) => {
  const { numberComment } = queryString.parse(search);
  const [getImageUrl] = useMutation(GET_IMAGE_URL);
  const [addComentToFilm] = useMutation(ADD_COMMENT);
  const [checkAvailableShowingFunction] = useMutation(CHECK_AVAILABLE_SHOWING);
  const [filmData, setFilmData] = useState<Film>({});
  const { loading, error, data } = useQuery(FILM, {
    variables: {
      where: {
        id,
      },
    },
  });
  const getUrlImage = async (key, callback) => {
    if (!key) callback(null);
    try {
      const {
        data: { imageUrl },
      } = await getImageUrl({
        variables: {
          key,
        },
      });

      callback(imageUrl);
    } catch (error) {
      callback(null);
    }
  };
  useEffect(() => {
    if (data && data.film) {
      let tempData: Film = Object.assign({}, data.film, {
        imageUrl: null,
        imageDescriptionUrl1: null,
        imageDescriptionUrl2: null,
        imageDescriptionUrl3: null,
      });

      getUrlImage(tempData.image, (fileUrl) => {
        tempData.imageUrl = fileUrl;
      });
      getUrlImage(tempData.imageDescription1, (fileUrl) => {
        tempData.imageDescriptionUrl1 = fileUrl;
      });
      getUrlImage(tempData.imageDescription2, (fileUrl) => {
        tempData.imageDescriptionUrl2 = fileUrl;
      });
      getUrlImage(tempData.imageDescription3, (fileUrl) => {
        tempData.imageDescriptionUrl3 = fileUrl;
      });
      setFilmData(tempData);
    }
  }, [data]);

  const {
    loading: commentLoading,
    error: commentError,
    data: commentData,
    refetch: commentRefetch,
  } = useQuery(COMMENT_CONNECTION, {});
  if (loading || commentLoading) return <Loading />;
  if (error || commentError) return <Error />;

  const { film } = data;

  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    const { comment } = values;
    try {
      await addComentToFilm({
        variables: {
          data: {
            filmId: id,
            comment,
          },
        },
      });
      popup.success("Thêm comment thành công");
      commentRefetch();
      setSubmitting(false);
      resetForm();
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };

  const handleCheckAvailableShowing = async (filmId: string) => {
    if (filmId) {
      try {
        const {
          data: { checkAvailableShowing },
        } = await checkAvailableShowingFunction({
          variables: {
            filmId,
          },
        });
        if (!checkAvailableShowing) {
          popup.error("Phim này chưa có lịch chiếu");
        } else {
          history.push(`${Routers.bookingTicketRouter}${filmId}`);
        }
      } catch (err: unknown) {
        popup.error(err);
      }
    }
  };
  return (
    <DetailFilmScence
      film={filmData}
      i18n={i18n}
      onSubmit={onSubmit}
      commentList={commentData?.reviewFilmsConnection}
      handleCheckAvailableShowing={handleCheckAvailableShowing}
    />
  );
};

export default DetailFilm;
