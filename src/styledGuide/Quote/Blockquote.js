import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledBlockquote = styled("blockquote")`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  color: ${({ theme }) => theme.colors.blue};
  line-height: 1.4;
  font-style: italic;
`;

export const Blockquote = ({ children, ...props }) => {
  return <StyledBlockquote {...props}>{children}</StyledBlockquote>;
};

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
};
