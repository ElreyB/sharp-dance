import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
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
import { SignIn, SignOut, AuthUserContext } from "../../fbconfig";
import { ADMIN } from "../../constants";

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

export default function Login({ history, ...props }) {
  const userContext = useContext(AuthUserContext);
  const { authUser } = userContext;
  if (authUser) {
    return <Redirect to={ADMIN} />;
  }

  return (
    <Page>
      <Button type="button" onClick={SignOut}>
        SignOut
      </Button>
      <Heading>{authUser ? "Welcome" : "Login"}</Heading>
      <Formik
        initialStatus={{}}
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          SignIn(values)
            .then(user => {
              // actions.setStatus(user);
            })
            .catch(e => {
              // actions.setStatus({ error: e });
            });
          actions.setSubmitting(false);
        }}
        render={({ isSubmitting, status }) => {
          return (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          );
        }}
      />
    </Page>
  );
}
