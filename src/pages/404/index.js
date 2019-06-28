import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Page, H2, H3 } from "../../styledGuide";
import { LANDING } from "../../constants";

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.blue};
`;

export default function Error404() {
  return (
    <Page>
      <H2>404 - Page Not Found</H2>
      <H3>Oops looks like you went off stage!</H3>
      <StyledLink exact to={LANDING}>
        Return to the homepage
      </StyledLink>
    </Page>
  );
}
