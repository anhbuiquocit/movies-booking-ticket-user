import React, { FC } from "react";
import { DetailFilmScence } from "./DetailFilmScence";
import "./style.scss";
import { FILM } from "./DetailFilm.graphql";
import { useQuery } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import i18n from "@movie-ticket/translation";
const DetailFilm: FC<{ match: any }> = ({
  match: {
    params: { id },
  },
}) => {
  const { loading, error, data } = useQuery(FILM, {
    variables: {
      where: {
        id,
      },
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error />;
  const { film } = data;
  console.log("data detail film: ", film);
  return <DetailFilmScence film={film} i18n={i18n} />;
};

export default DetailFilm;
