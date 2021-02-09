import React from "react";
import styled from "styled-components/macro";
import { A } from "..";
import { Nav } from "../Nav";
import SideDrawer from "../SideDrawer";
import HamburgerButton from "../HamburgerButton";
import { SocialIcons } from "../SocialIcons";
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
`;
const LogoLink = styled(A)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: block;
`;

const StyledHamburger = styled(HamburgerButton)`
  ${({ theme }) => theme.media.desktop`
  display: none
  `}
`;

const StyledNav = styled(Nav)`
  ${({ theme }) => theme.media.mobile`
  display: none
  `}
`;

const DesktopSocialIcons = styled(SocialIcons)`
  ${({ theme }) => theme.media.mobile`
  display: none
  `}
  padding-top: 8px;
  padding-left: 8px;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 20px;
  height: 100%;
`;

const HamburgerWrapper = styled.div`
  padding: 8px 16px;
`;

export function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <Wrapper>
      <LogoWrapper>
        <StyledH1>
          <LogoLink to={LANDING}>{SHARP_CO}</LogoLink>
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
