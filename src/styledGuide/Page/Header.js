import React from "react";
import styled from "styled-components/macro";
import { A } from "../A";
import { Nav } from "../Nav";
import { H1 } from "../Headings";
import {
  ABOUT,
  BIOS,
  CLASSES,
  EVENTS,
  LANDING,
  MEDIA,
  PRESS
} from "../../constants";
import { Grid } from "gymnast";

const StyledH1 = styled(H1)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
const StyledGrid = styled(Grid)`
  position: fixed;
  min-height: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
`;
const UndecoratedA = styled(A)`
  text-decoration: none;
`;

export const Header = () => {
  return (
    <StyledGrid align="center" justify="center">
      <StyledH1 size="fit" margin="0 XL">
        <UndecoratedA href={LANDING} target={null}>
          Sharp Dance
        </UndecoratedA>
      </StyledH1>
      <Nav
        size="auto"
        links={[
          { to: BIOS, label: "Bio's" },
          { to: MEDIA, label: "Media" },
          { to: PRESS, label: "Press" },
          { to: EVENTS, label: "Performances" },
          { to: CLASSES, label: "Classes" },
          { to: ABOUT, label: "About" }
        ]}
      />
    </StyledGrid>
  );
};
