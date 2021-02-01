import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledFooter = styled("footer")`
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
`;

export const Footer = ({ children, ...props }) => {
  return <StyledFooter {...props}>{children}</StyledFooter>;
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
