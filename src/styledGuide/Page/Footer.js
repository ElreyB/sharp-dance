import React from "react";
import { Grid } from "gymnast";
import styled from "styled-components";

import { A } from "../A";

const StyledGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Footer = props => {
  return (
    <StyledGrid {...props} justify="center">
      <Grid size={6}>
        <A size={6}>Diane's photography</A>
        <A size={6}>Contact us / Bookings</A>
        <A size={6}>Press Kit</A>
        <A size={6}>Donations</A>
      </Grid>
    </StyledGrid>
  );
};
