import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operation";

import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const FeedbackError = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackError}
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
        <label className={css.label} htmlFor={numberId}>
          Number
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberId}
            placeholder="xxx-xx-xx"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
