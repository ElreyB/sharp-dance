import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { Page, H1 } from "../../styledGuide";
import { SignIn } from "../../fbconfig";

const Heading = styled(H1)`
  color: ${({ theme }) => theme.colors.red};
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, "too short")
    .required("Required")
});

export default function Login() {
  return (
    <Page>
      <Heading>Login</Heading>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          const promise = SignIn(values);
          promise.catch(e => {
            actions.setStatus({ error: e });
            console.error(e);
          });
          actions.setSubmitting(false);
        }}
        render={({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
            <Field type="password" className="error" name="password" />
            <ErrorMessage name="password" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    </Page>
  );
}
