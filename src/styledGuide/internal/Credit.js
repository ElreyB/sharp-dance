import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Grid } from "gymnast";

const StyledCredit = styled(Grid)`
  word-wrap: break-word;
  overflow: wrap;
  white-space: normal;
  font-size: 12px;
`;
export const Credit = ({ children, ...props }) => {
  if (!children) {
    return <></>;
  }

  return (
    <StyledCredit size="fit" {...props}>
      Credit: {children}
    </StyledCredit>
  );
};

Credit.propTypes = {
  children: PropTypes.string
};
