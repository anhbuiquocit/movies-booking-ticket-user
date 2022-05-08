import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
interface PaymentProps {
  onSubmit: (values: any, helper: FormikHelpers<any>) => void;
  i18n?: any;
}
const PaymentScence = ({ onSubmit }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{}}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          touched,
          setTouched,
          validateForm,
          setErrors,
        }) => {
          return <h2>This is page payment</h2>;
        }}
      </Formik>
    </>
  );
};

export default PaymentScence;
