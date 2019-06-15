import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { Grid, Page, H1 } from "../../styledGuide";
import { SignIn } from "../../fbconfig";

const Heading = styled(H1)`
  color: ${({ theme }) => theme.colors.red};
`;

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, "too short")
    .required("Required")
});

export default function SignUpForm() {
  return (
    <Page>
      <Grid justify="center">
        <Heading justify="center">Sign Up</Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignUpSchema}
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
              <Field type="password" className="error" name="passwordConfirm" />
              <ErrorMessage name="passwordConfirm" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
      </Grid>
    </Page>
  );
}
