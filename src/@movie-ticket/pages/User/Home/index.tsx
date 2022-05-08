import React, { FC, useEffect, useState } from "react";
import { HomeScence } from "./HomeScence";
import { useMutation, useQuery } from "@apollo/client";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import i18n from "@movie-ticket/translation";
import { FILM_CONNECTION, GET_IMAGE_URL } from "./Home.graphql";
import { Film } from "@movie-ticket/constant/modal";
import _ from "lodash";
export const Home: FC = (): JSX.Element => {
  const [getImageUrl] = useMutation(GET_IMAGE_URL);
  const [listFilm, setListFilm] = useState<Film[]>([]);
  const { loading, error, data } = useQuery(FILM_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
      },
    },
  });

  useEffect(() => {
    let tempList: Array<Film> = [];
    if (data && data.films && data.films.length > 0) {
      for (let i = 0; i < data.films.length; i++) {
        const tempItem: Film = Object.assign({}, data.films[i], {
          imageUrl: null,
        });
        tempList.push(tempItem);
      }

      for (let i = 0; i < tempList.length; i++) {
        getUrlImage(tempList[i].image, (fileUrl) => {
          tempList[i].imageUrl = fileUrl;
        });
      }
    }
    // data.UsersConnection = tempList;
    tempList = _.uniqBy(tempList, "id");
    setListFilm(tempList);
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
 
  return <HomeScence films={listFilm} i18n={i18n} />;
};
