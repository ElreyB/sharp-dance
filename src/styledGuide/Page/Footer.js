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
        {/** TODO: add right to paths*/}
        <A size={6} to={"/"}>
          Diane's photography
        </A>
        <A size={6} to={"/"}>
          Contact us / Bookings
        </A>
        <A size={6} to={"/"}>
          Press Kit
        </A>
        <A size={6} to={"/"}>
          Donations
        </A>
      </Grid>
    </StyledGrid>
  );
};
