import React, { FC, useEffect, useState } from "react";
import "./styles.scss";
import ListFilmScence from "./ListFilmScence";
import { useMutation, useQuery } from "@apollo/client";
import i18n from "@movie-ticket/translation";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import { FILM_CONNECTION, GET_IMAGE_URL } from "./index.graphql";
import { Film } from "@movie-ticket/constant/modal";
import { FormikHelpers } from "formik";
import _ from "lodash";
import queryString from "query-string";

export const PageListFilm = ({
  history,
  location: { pathname, search },
  match,
}: {
  history: any;
  location: any;
  match: any;
}): JSX.Element => {
  // const [numberPerPage, setNumberPerPage] = useState([12, 24, 48 92])
  const {
    orderByValue = "",
    nameSearch = "",
    page = "1",
    rowsPerPage = "10",
  }: {
    orderBy?: string;
    page?: string;
    rowsPerPage?: string;
    [x: string]: any;
  } = queryString.parse(search);
  console.log("orderBy: ", orderByValue);
  console.log("nameSearch: ", nameSearch);
  const [getImageUrl] = useMutation(GET_IMAGE_URL);
  const [listFilm, setListFilm] = useState<Film>();
  const { loading, error, data } = useQuery(FILM_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
        OR: [
          {
            name: {
              contains: nameSearch,
            },
          },
        ],
      },

      // orderBy: [
      //   {
      //     createdAt: "asc",
      //   },
      // ],
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
  if (loading) return <Loading />;
  if (error) return <Error />;
  console.log("dataa:", data);
  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Values: ", values);
  };
  return <ListFilmScence data={listFilm} onSubmit={onSubmit} i18n={i18n} />;
};
