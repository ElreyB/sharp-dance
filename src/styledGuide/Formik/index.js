import React from "react";
import {
  Formik as FormikOriginal,
  Field as FieldOriginal,
  Form as FormOriginal,
  ErrorMessage as ErrorMessageOriginal
} from "formik";
import { Grid } from "gymnast";
import styled from "styled-components";
import { withGrid } from "../internal";

export const Formik = withGrid(FormikOriginal);
export const Form = withGrid(FormOriginal);
export const ErrorMessage = withGrid(ErrorMessageOriginal);

const StyledField = styled(FieldOriginal)`
  border-color: red;
`;

export const Field = ({ size, margin = "0 M M M", padding, ...props }) => {
  return (
    <Grid size={size} margin={margin} padding={padding}>
      <StyledField {...props} />
    </Grid>
  );
};
