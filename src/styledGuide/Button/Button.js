import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  border: 1px solid white;
  flex-direction: column;

  flex-grow: 1;
`;

export const Button = React.forwardRef(
  ({ children, role = "button", ...props }, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.oneOf(["button", "submit", "reset"]),
};
