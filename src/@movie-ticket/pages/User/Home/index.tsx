import React, { FC } from "react";
import { HomeScence } from "./HomeScence";
import { useQuery } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import { FILM_CONNECTION } from "./Home.graphql";
export const Home: FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(FILM_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
      },
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error />;

  const { films } = data;
  return <HomeScence films={films} />;
};
