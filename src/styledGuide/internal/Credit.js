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
export const Credit = ({ children, ...props }) =>
  children ? (
    <StyledCredit size="fit" {...props}>
      Credit: {children}
    </StyledCredit>
  ) : null;

Credit.propTypes = {
  children: PropTypes.string
};
