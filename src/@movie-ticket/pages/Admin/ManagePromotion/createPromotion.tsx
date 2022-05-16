import PromotionForm from "./PromotionForm";
import { FormikHelpers } from "formik";
import React from "react";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
import { CREATE_PROMOTION } from "./index.graphql";
import { useApolloClient, useMutation } from "@apollo/client";
import Router from "@movie-ticket/routers/router";
const CreatePromotion = ({
  history,
  location,
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const [adminCreatePromotion] = useMutation(CREATE_PROMOTION);
  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("valuesss: ", values);

    const { code, discount, maxDiscount, date, time } = values;
    try {
      await adminCreatePromotion({
        variables: {
          data: {
            code,
            discount,
            maxDiscount,
            startDate: date,
            startTime: time[0],
            endTime: time[1],
          },
        },
      });
      popup.success("Tạo khuyến mãi thành công");

      setSubmitting(false);
      resetForm();
      history.push(Router.managePromotion);
    } catch (err) {
      popup.error(err);
      setSubmitting(false);
    }
  };
  return <PromotionForm i18n={i18n} onSubmit={onSubmit} />;
};
export default CreatePromotion;
