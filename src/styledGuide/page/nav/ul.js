import React from "react";
import { useGrid } from "gymnast";
import styled from "styled-components/macro";

const StyledUl = styled("ul")`
  list-style-type: none;
  margin: 0;
`;

export const Ul = props => (
  <StyledUl
    {...useGrid({ justify: "center", margin: 0, padding: 0, ...props })[1]}
  />
);
