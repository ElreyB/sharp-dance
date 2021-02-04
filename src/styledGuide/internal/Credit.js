import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledCredit = styled.div`
  word-wrap: break-word;
  overflow: wrap;
  white-space: normal;
  font-size: 12px;
`;
export const Credit = ({ children, ...props }) => {
  if (!children) return null;
  return <StyledCredit {...props}>Credit: {children}</StyledCredit>;
};

Credit.propTypes = {
  children: PropTypes.string,
};
