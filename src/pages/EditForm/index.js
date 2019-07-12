import React from "react";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { Grid } from "gymnast";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  Formik,
  Label
} from "../../styledGuide";
import { editData } from "../../fbconfig";
import { QUOTES } from "../../constants";

const Error = styled.div`
  color: red;
  font-size: 10px;
  font-weight: bold;
`;

const QuoteSchema = Yup.object().shape({
  author: Yup.string().required("Required"),
  quote: Yup.string().required("Required"),
  source: Yup.string().required("Required")
});

const Wrapper = styled(Grid)`
  flex: 0 1 100%;
  border: 2px solid white;
`;

const Input = styled(Field)`
  width: 100%;
  height: 26px;
`;

function EditForm({ initialValues, showForm, className }) {
  if (showForm) {
    return null;
  }
  return (
    <Wrapper className={className}>
      <Formik
        initialStatus={{}}
        initialValues={initialValues}
        validationSchema={QuoteSchema}
        onSubmit={async (values, actions) => {
          editData(QUOTES, values.id, values);
          actions.setSubmitting(false);
        }}
        render={({
          isSubmitting,
          status,
          errors,
          handleSubmit,
          handleChange,
          values
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="author">Add Author</Label>
              <Input
                name="author"
                type="text"
                placeholder="Sandy Critic"
                value={values.author}
                onChange={handleChange}
              />
              <ErrorMessage name="author" component={Error} />
              <Label htmlFor="quote">quote</Label>
              <Input
                name="quote"
                type="text"
                placeholder="There's no place like home"
                value={values.quote}
                onChange={handleChange}
              />
              <ErrorMessage name="quote" component={Error} />
              <Label htmlFor="source">source</Label>
              <Input
                name="source"
                type="text"
                placeholder="Philadelphia Weekly"
                value={values.source}
                onChange={handleChange}
              />
              <ErrorMessage name="source" component={Error} />
              <Button type="submit" disabled={isSubmitting}>
                edit Quote
              </Button>
            </Form>
          );
        }}
      />
    </Wrapper>
  );
}

export default EditForm;
