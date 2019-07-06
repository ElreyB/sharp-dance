import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { Grid } from "gymnast";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  Formik,
  H1,
  Label,
  Page,
  Quote
} from "../../styledGuide";
import { newData, AuthUserContext, SignOut } from "../../fbconfig";
import { LOG_IN, QUOTES } from "../../constants";

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

const Container = styled(Grid)`
  display: flex;
  justify-content: center;
`;
const LeftContent = styled(Grid)`
  flex: 0 1 50%;
  border: 2px solid white;
`;
const RightContent = styled(Grid)`
  flex: 0 1 50%;
  border: 2px solid white;
  overflow: scroll;
  max-height: 350px;
`;
const Input = styled.input`
  width: 100%;
  height: 26px;
`;

function AdminPage({ quotes, history, ...props }) {
  const [quoteList, setQuoteList] = useState([]);
  console.warn(props, quotes);
  const appContext = useContext(AuthUserContext);
  const { authUser } = appContext;
  // const quotes = Object.values(quotes);
  useEffect(() => {
    setQuoteList(Object.values(quotes));
  }, [quotes]);
  if (!authUser) {
    return <Redirect to={LOG_IN} />;
  }

  return (
    <Page>
      <Button type="button" onClick={SignOut}>
        SignOut
      </Button>
      <H1>Admin Page</H1>
      <Container>
        <LeftContent>
          <Formik
            initialStatus={{}}
            initialValues={{ author: "", quote: "", source: "" }}
            validationSchema={QuoteSchema}
            onSubmit={(values, actions) => {
              console.warn("VALUES", values);
              newData(QUOTES, { ...values });
            }}
            render={({ isSubmitting, status, errors }) => {
              console.warn("ERRORS", errors);
              return (
                <Form>
                  <Label htmlFor="author">Add Author</Label>
                  <Field name="author" type="text" placeholder="Sandy Critic" />
                  <ErrorMessage name="author" component={Error} />
                  <Label htmlFor="quote">quote</Label>
                  <Field
                    name="quote"
                    type="text"
                    placeholder="There's no place like home"
                  />
                  <ErrorMessage name="quote" component={Error} />
                  <Label htmlFor="source">source</Label>
                  <Field
                    name="source"
                    type="text"
                    placeholder="Philadelphia Weekly"
                  />
                  <ErrorMessage name="source" component={Error} />
                  <Button type="submit" disabled={isSubmitting}>
                    Add Quote
                  </Button>
                </Form>
              );
            }}
          />
        </LeftContent>
        <RightContent>
          {quoteList.length > 0 && (
            <Grid padding="S">
              {/* <H2>{pages.home.quotesTitle}</H2> */}
              {quoteList.map((quote, i) => (
                <Quote {...quote} key={i} />
              ))}
            </Grid>
          )}
        </RightContent>
      </Container>
    </Page>
  );
}

export default AdminPage;
