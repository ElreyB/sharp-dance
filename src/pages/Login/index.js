import React from "react";
import * as Yup from "yup";
import styled from "styled-components/macro";
import {
  Page,
  H1,
  Button,
  Formik,
  Field,
  Form,
  ErrorMessage
} from "../../styledGuide";

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
          console.warn("actions and values", values, actions);
          return setTimeout(() => {
            console.warn(values);
            actions.setSubmitting(false);
          }, 2000);
        }}
        render={({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
            <Field type="password" className="error" name="password" />
            <ErrorMessage name="password" />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      />
    </Page>
  );
}
