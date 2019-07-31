import React from "react";
import { NavLink } from "react-router-dom";
import { useGrid } from "gymnast";
import styled from "styled-components/macro";

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: normal;

  &.link-active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const A = ({ to, children, exact = true, ...props }) => {
  const [, allProps] = useGrid(props);

  return (
    <StyledNavLink
      {...allProps}
      exact={exact}
      to={to}
      activeClassName="link-active"
    >
      {children}
    </StyledNavLink>
  );
};
