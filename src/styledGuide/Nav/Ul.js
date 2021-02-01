import React from "react";
import styled from "styled-components/macro";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  //add media query for moblie and desktop
`;

export const Ul = (props) => {
  return <StyledUl {...props} />;
};
