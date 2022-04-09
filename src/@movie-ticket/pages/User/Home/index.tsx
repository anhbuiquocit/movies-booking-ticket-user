import React, { FC } from "react";
import { HomeScence } from "./HomeScence";
import { useQuery } from "@apollo/client";
import { GET_LIST_FILM } from "./Home.graphql";
import Loading from "../../../components/Loading";
export const Home: FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_LIST_FILM, {
    variables: {
      filmInput: {
        deletedAt: null,
      },
    },
  });
  if (loading) return <Loading />;
  console.log("processEnv: ", process.env);
  console.log("fffff");
  console.log("dataaa: ", data);
  return <HomeScence />;
};
