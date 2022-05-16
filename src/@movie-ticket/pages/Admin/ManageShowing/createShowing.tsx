import React from "react";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import Error from "@movie-ticket/components/Error";
import Loading from "@movie-ticket/components/Loading";
import Router from "@movie-ticket/routers/router";
import ShowingForm from "./ShowingForm";
import {
  FILMS_CONNECTION,
  ROOM_CONNECTION,
  CREATE_SHOWING,
} from "./ManagerShowing.graphql";
import { FormikHelpers } from "formik";
const CreateShowing = ({
  history,
  location,
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const [createShowing] = useMutation(CREATE_SHOWING);
  const {
    loading: filmLoading,
    error: filmError,
    data: filmData,
  } = useQuery(FILMS_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
      },
    },
  });
  const {
    loading: roomoading,
    error: roomError,
    data: roomData,
  } = useQuery(ROOM_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
      },
    },
  });
  if (filmLoading || roomoading) return <Loading />;
  if (filmError || roomError) return <Error />;
  console.log("filmData: ", filmData);
  console.log("roomData: ", roomData);
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Valueees: ", values);
    try {
      const { room, film, price, date, startTime } = values;
      await createShowing({
        variables: {
          data: {
            room: {
              connect: {
                id: room,
              },
            },
            film: {
              connect: {
                id: film,
              },
            },
            price,
            startDate: date,
            startTime,
          },
        },
      });

      popup.success("Tạo xuất chiếu thành công");

      setSubmitting(false);
      resetForm();
    } catch (err: unknown) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return (
    <ShowingForm
      i18n={i18n}
      onSubmit={onSubmit}
      isCreate
      films={filmData.films}
      rooms={roomData.roomConnection}
    />
  );
};
export default CreateShowing;
