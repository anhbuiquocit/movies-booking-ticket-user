import StatisticalScence from "./StatisticalScence";
import { FormikHelpers } from "formik";
import i18n from "@movie-ticket/translation";
import { popup } from "@movie-ticket/tools";
const Statistical = ({
  history,
  location: { pathname, search },
  match,
}: {
  history: any;
  location: any;
  match: any;
}) => {
  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("values: ", values);
  };
  return <StatisticalScence i18n={i18n} onSubmit={onSubmit} />;
};
export default Statistical;
