import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import { apiRegister } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short! NAME must be at least 8 characters long")
      .max(50, "Too Long! NAME should be no more that 50 characters")
      .required("NAME is Required"),
    email: Yup.string()
      .email("EMAIL is incorrect")
      .required("EMAIL is Required"),
    password: Yup.string()
      .min(8, "Too Short! PASSWORD must be at least 8 characters long")
      .max(50, "Too Long! PASSWORD should be no more that 50 characters")
      .required("PASSWORD is Required"),
  });

  return (
    <>
      {loading && !error && <Loader />}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameId}>
            Name
            <Field
              className={css.field}
              type="text"
              name="name"
              id={nameId}
              placeholder="Alex Pag"
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label className={css.label} htmlFor={emailId}>
            Email
            <Field
              className={css.field}
              type="text"
              name="email"
              id={emailId}
              placeholder="gram2@com.com"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label} htmlFor={passwordId}>
            Password
            <Field
              className={css.field}
              type="text"
              name="password"
              id={passwordId}
              placeholder="********"
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
