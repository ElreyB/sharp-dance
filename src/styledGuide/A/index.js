import React from "react";
import { NavLink } from "react-router-dom";
import { useGrid } from "gymnast";
import styled, { css } from "styled-components/macro";

const linkStyles = css`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: normal;

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
  padding = "0 S",
  to,
  ...props
}) => {
  const [, allProps] = useGrid({ padding, ...props });

  if (href) {
    return (
      <Anchor {...{ href, target }} {...allProps}>
        {children}
      </Anchor>
    );
  }

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
