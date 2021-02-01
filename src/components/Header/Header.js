import React from "react";
import styled from "styled-components/macro";
import { A } from "../../styledGuide/A/A";
import { Nav } from "../../styledGuide/Nav";
import { H1 } from "../../styledGuide/Headings";
import SideDrawer from "../../styledGuide/SideDrawer";
import HamburgerButton from "../../styledGuide/HamburgerButton";
import FlexWrapper from "../../styledGuide/FlexWrapper";
import { SocialIcons } from "../../styledGuide/SocialIcons";
import { LANDING, SHARP_CO } from "../../constants";

const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.white};
`;
const StyledGrid = styled(FlexWrapper)`
  border: 0px solid transparent;
  display: flex;
  flex-flow: row wrap;
  white-space: nowrap;
  /* justify-content: center;
  align-items: center; */
  position: fixed;
  height: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  width: 100%;
`;
const UndecoratedA = styled(A)`
  text-decoration: none;
  font-size: 18px;
`;

const StyledHamburger = styled(HamburgerButton)`
  ${({ theme }) => theme.mediaMin.sm`
  display: none
  `}
`;

const StyledNav = styled(Nav)`
  ${({ theme }) => theme.mediaMax.sm`
  display: none
  `}

  @media (max-width: 600px) {
    font-size: 0;
    flex-grow: 1;
  }
`;

const DesktopSocialIcons = styled(SocialIcons)`
  ${({ theme }) => theme.mediaMax.sm`
  display: none
  `}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export default function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <StyledGrid align="center" justify="center">
      <Wrapper>
        <StyledH1 size="fit" margin="0 XL" noResize>
          <UndecoratedA to={LANDING}>{SHARP_CO}</UndecoratedA>
        </StyledH1>
        <DesktopSocialIcons />
      </Wrapper>
      <SideDrawer show={show} onClick={() => setShow(!show)} />
      <StyledNav size="auto" />
      <StyledHamburger onClick={() => setShow(!show)} />
    </StyledGrid>
  );
}
