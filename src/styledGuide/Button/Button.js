import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { FlexWrapper } from "../FlexWrapper";

const Wrapper = styled(FlexWrapper)`
  padding: 8px 16px;
`;

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
      <Wrapper>
        <StyledButton {...props} ref={ref}>
          {children}
        </StyledButton>
      </Wrapper>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.oneOf(["button", "submit", "reset"]),
};
