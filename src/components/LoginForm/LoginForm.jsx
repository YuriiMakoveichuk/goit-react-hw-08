import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";

import css from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    console.log("values", values);
    actions.resetForm();
  };

  const LoginValidationSchema = Yup.object().shape({
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
        validationSchema={LoginValidationSchema}
      >
        <Form className={css.form}>
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
            Login
          </button>
          {error && (
            <p style={{ color: "red", fontSize: "20px" }}>Ooops error...</p>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
