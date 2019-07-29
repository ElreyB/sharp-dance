import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { Grid } from "gymnast";
import {
  Button,
  DropDown,
  ErrorMessage,
  Field,
  Form,
  Formik,
  H1,
  H2,
  Label,
  Page,
  Quote
} from "../../styledGuide";
import { newData, AuthUserContext, SignOut, deleteData } from "../../fbconfig";
import {
  LOG_IN,
  QUOTES,
  ABOUT,
  ADMIN,
  BIOS,
  CLASSES,
  EVENTS,
  LANDING,
  MEDIA
} from "../../constants";
import EditForm from "../EditForm";

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

const Input = styled(Field)`
  width: 100%;
  height: 26px;
`;

const testNav = [
  {
    itemLinks: [
      { to: LANDING, label: "Home" },
      { to: BIOS, label: "Bio's" },
      { to: MEDIA, label: "Media" },
      { to: EVENTS, label: "Events" },
      { to: CLASSES, label: "Classes" },
      { to: ABOUT, label: "About" },
      { to: LOG_IN, label: "Login" },
      { to: ADMIN, label: "Admin" }
    ],
    label: "Nav label"
  },
  {
    itemLinks: [
      { to: LANDING, label: "Home" },
      { to: BIOS, label: "Bio's" },
      { to: MEDIA, label: "Media" },
      { to: EVENTS, label: "Events" },
      { to: CLASSES, label: "Classes" }
    ],
    label: "Diff Label"
  },
  {
    itemLinks: [{ to: LANDING, label: "Home" }, { to: BIOS, label: "Bio's" }],
    label: "Other label"
  }
];

function AdminPage({ quotes, history, ...props }) {
  const [willEdit, setWillEdit] = useState(false);
  const appContext = useContext(AuthUserContext);
  const { authUser } = appContext;
  const quoteList = Object.values(quotes);

  if (!authUser) {
    return <Redirect to={LOG_IN} />;
  }

  return (
    <Page>
      <Button type="button" onClick={SignOut}>
        SignOut
      </Button>
      {testNav.map(item => (
        <DropDown {...item} key={item.label} />
      ))}
      <H1>Admin Page</H1>
      <Container>
        <LeftContent>
          <Formik
            initialStatus={{}}
            initialValues={{
              author: "",
              quote: "",
              source: ""
            }}
            validationSchema={QuoteSchema}
            onSubmit={(values, actions) => {
              newData(QUOTES, { ...values });
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
              <H2>Quote List</H2>
              {quoteList.map((quote, i) => {
                return (
                  <Grid key={i}>
                    <Quote {...quote} />
                    <Button
                      type="button"
                      onClick={() => deleteData("/" + QUOTES, quote.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setWillEdit(!willEdit)}
                    >
                      {willEdit ? "Edit" : "Hide Edit form"}
                    </Button>
                    <EditForm initialValues={quote} showForm={willEdit} />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </RightContent>
      </Container>
    </Page>
  );
}

export default AdminPage;
