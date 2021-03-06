import React from "react";
import styled from "styled-components/macro";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Ul = (props) => {
  return <StyledUl {...props} />;
};
