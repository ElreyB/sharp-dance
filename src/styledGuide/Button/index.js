import React from "react";
import PropTypes from "prop-types";
import { useGrid, Grid } from "gymnast";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  border: 1px solid white;
`;

export const Button = ({
  size = "fit",
  padding = "S M",
  children,
  role = "button",
  ...props
}) => {
  const [, allProps] = useGrid(props);

  return (
    <Grid size={size} padding={padding}>
      <StyledButton {...allProps}>{children}</StyledButton>
    </Grid>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.oneOf(["button", "submit", "reset"])
};
