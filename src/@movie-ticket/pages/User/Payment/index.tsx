import PaymentScence from "./PaymentScence";
import { FormikHelpers } from "formik";
const PagePayment = ({
  history,
  location: { search },
  match: {
    params: {},
  },
}: {
  history: any;
  location: any;
  match: any;
}): JSX.Element => {
  const onSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Valuesss: ", values);
  };
  return <PaymentScence onSubmit={onSubmit} />;
};

export default PagePayment;
