import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { Button, Grid, Page, H1 } from "../../styledGuide";
import { SignUp } from "../../fbconfig";

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
          initialValues={{ email: "", password: "", passwordConfirm: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            const promise = SignUp(values);
            promise.catch(e => {
              actions.setStatus({ error: e });
            });
            actions.setSubmitting(false);
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
      </Grid>
    </Page>
  );
}
