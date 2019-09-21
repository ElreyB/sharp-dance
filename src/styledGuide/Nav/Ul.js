import React from "react";
import { useGrid } from "gymnast";
import styled from "styled-components/macro";

const StyledUl = styled("ul")`
  list-style-type: none;
  margin: 0;
`;

export const Ul = props => {
  const [shouldShow, allProps] = useGrid({
    justify: "end",
    margin: "0 L 0 0",
    padding: 0,
    ...props
  });

  if (!shouldShow) {
    return <></>;
  }

  return <StyledUl {...allProps} />;
};
