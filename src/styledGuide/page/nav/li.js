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
`;

export const Li = ({ to, children, ...props }) => {
  const [, allProps] = useGrid({ size: "fit", margin: "0 M", ...props });
  const activeStyle = {
    fontWeight: "bold"
  };

  return (
    <StyledLi {...allProps}>
      <NavLink activeStyle={activeStyle} to={to}>
        {children}
      </NavLink>
    </StyledLi>
  );
};
