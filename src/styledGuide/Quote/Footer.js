import React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";
import styled from "styled-components/macro";

const StyledFooter = styled("footer")`
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
`;

export const Footer = ({ children, ...props }) => {
  const [, allProps] = useGrid(props);

  return <StyledFooter {...allProps}>{children}</StyledFooter>;
};

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
