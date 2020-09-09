import React from "react";
import { Grid } from "gymnast";
import styled from "styled-components/macro";

import { A } from "../A";
import { PHOTOGRAPHY, CONTACT, PRESS_KIT, DONATIONS } from "../../constants";

const StyledGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.black};
`;

function FooterLink({ to, children }) {
  return (
    <Grid size={6}>
      <A size="fit" to={to}>
        {children}
      </A>
    </Grid>
  );
}

export const Footer = (props) => {
  return (
    <StyledGrid {...props} justify="center">
      <Grid size={{ mobile: 12, desktop: 6 }}>
        <FooterLink to={PHOTOGRAPHY}>Diane's photography</FooterLink>
        <FooterLink to={CONTACT}>Contact us / Bookings</FooterLink>
        <FooterLink to={PRESS_KIT}>Press Kit</FooterLink>
        <FooterLink to={DONATIONS}>Donations</FooterLink>
      </Grid>
    </StyledGrid>
  );
};
