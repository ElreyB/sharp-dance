import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid, H1 } from '../../styledGuide';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'too short')
    .required('Required')
});

export default function Login() {
  return (
    <Grid>
      <H1>Login</H1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          console.warn('actions and values', values, actions);
          return setTimeout(() => {
            console.warn(values);
            actions.setSubmitting(false);
          }, 2000);
        }}
        render={({ errors, status, touched, isSubmitting }) => (
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
    </Grid>
  );
}
