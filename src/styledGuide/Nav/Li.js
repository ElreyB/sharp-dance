import React from "react";
import { NavLink } from "react-router-dom";
import { useGrid } from "gymnast";
import styled from "styled-components/macro";

const StyledLi = styled("li")`
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: normal;
  }
  a.link-active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Li = ({ to, children, ...props }) => {
  const [, allProps] = useGrid({ size: "fit", margin: "0 M", ...props });

  return (
    <StyledLi {...allProps}>
      <NavLink exact to={to} activeClassName="link-active">
        {children}
      </NavLink>
    </StyledLi>
  );
};
