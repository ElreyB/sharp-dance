import React from "react";
import styled from "styled-components/macro";
import { A } from "../../styledGuide/A/A";
import { Nav } from "../../styledGuide/Nav";
import SideDrawer from "../../styledGuide/SideDrawer";
import HamburgerButton from "../../styledGuide/HamburgerButton";
import { SocialIcons } from "../../styledGuide/SocialIcons";
import { LANDING, SHARP_CO } from "../../constants";

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;
const Wrapper = styled.div`
  border: 0px solid transparent;
  display: flex;
  flex-flow: row wrap;
  white-space: nowrap;
  position: fixed;
  height: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  width: 100%;
  padding: 5px 0;
  ${({ theme }) => theme.mediaMax.md`
    padding: 0;
  `}
`;
const UndecoratedA = styled(A)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;

const StyledHamburger = styled(HamburgerButton)`
  ${({ theme }) => theme.mediaMin.md`
  display: none
  `}
`;

const StyledNav = styled(Nav)`
  ${({ theme }) => theme.mediaMax.md`
  display: none
  `}
`;

const DesktopSocialIcons = styled(SocialIcons)`
  ${({ theme }) => theme.mediaMax.md`
  display: none
  `}
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 20px;
`;

const HamburgerWrapper = styled.div`
  padding: 8px 16px;
`;

export default function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <Wrapper>
      <LogoWrapper>
        <StyledH1 size="fit" margin="0 XL" noResize>
          <UndecoratedA to={LANDING}>{SHARP_CO}</UndecoratedA>
        </StyledH1>
        <DesktopSocialIcons />
      </LogoWrapper>
      <SideDrawer show={show} onClick={() => setShow(!show)} />
      <StyledNav />
      <HamburgerWrapper>
        <StyledHamburger onClick={() => setShow(!show)} />
      </HamburgerWrapper>
    </Wrapper>
  );
}
