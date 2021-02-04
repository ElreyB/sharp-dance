import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components/macro";

const linkStyles = css`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: normal;
  border: 0px solid transparent;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-grow: 1;

  &.link-active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:focus {
    border-radius: 4px;
    box-shadow: 0px 0px 0px 1px #fff inset;
    outline: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${linkStyles}
`;

const Anchor = styled.a`
  ${linkStyles}
`;

export const A = ({
  children,
  exact = true,
  href,
  target = "_blank",
  to,
  ...props
}) => {
  if (href) {
    return (
      <Anchor {...{ href, target }} {...props}>
        {children}
      </Anchor>
    );
  }

  return (
    <StyledNavLink
      {...props}
      exact={exact}
      to={to}
      activeClassName="link-active"
    >
      {children}
    </StyledNavLink>
  );
};
