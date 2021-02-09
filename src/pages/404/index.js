import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Page from "../../layouts/Page";
import { LANDING } from "../../constants";

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.blue};
`;

export default function Error404() {
  return (
    <Page>
      <h2>404 - Page Not Found</h2>
      <h3>Oops looks like you went off stage!</h3>
      <StyledLink exact to={LANDING}>
        Return to the homepage
      </StyledLink>
    </Page>
  );
}
