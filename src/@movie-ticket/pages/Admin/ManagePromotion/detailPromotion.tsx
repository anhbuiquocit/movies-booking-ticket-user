import PromotionForm from "./PromotionForm";
import { FormikHelpers } from "formik";
import React from "react";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import { PROMOTION_CONNECTION, UPDATE_PROMOTION } from "./index.graphql";
import Loading from "@movie-ticket/components/Loading";
import Error from "@movie-ticket/components/Error";
import Router from "@movie-ticket/routers/router";

const DetailPromotion = ({
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
  const { loading, error, data } = useQuery(PROMOTION_CONNECTION, {
    variables: {
      where: {
        deletedAt: {
          equals: null,
        },
        id: {
          equals: id,
        },
      },
    },
  });
  const [adminUpdatePromotion] = useMutation(UPDATE_PROMOTION);
  if (loading) return <Loading />;
  if (error) return <Error />;
  console.log("dataff: ", data);
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Valuess: ", values);
    const { code, discount, maxDiscount, date, time } = values;
    try {
      await adminUpdatePromotion({
        variables: {
          data: {
            code: {
              set: code,
            },
            discount: {
              set: discount,
            },
            maxDiscount: {
              set: maxDiscount,
            },
            startDate: {
              set: date,
            },
            startTime: {
              set: time[0],
            },
            endTime: {
              set: time[1],
            },
          },
        },
      });
      popup.success("Cập nhật khuyến mãi thành công");

      setSubmitting(false);
      resetForm();
      history.push(Router.managePromotion);
    } catch (err) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return (
    <PromotionForm
      i18n={i18n}
      onSubmit={onSubmit}
      data={data?.promotionConnection[0]}
    />
  );
};
export default DetailPromotion;
