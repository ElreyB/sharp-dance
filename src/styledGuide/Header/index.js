import React from "react";
import styled from "styled-components/macro";
import { A } from "..";
import { Nav } from "../Nav";
import SideDrawer from "../SideDrawer";
import HamburgerButton from "../HamburgerButton";
import { SocialIcons } from "../SocialIcons";
import { Image } from "../Image";
import { LANDING, SHARP_CO } from "../../constants";

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;
const Wrapper = styled.div`
  border: 0px solid transparent;
  display: flex;
  flex-flow: row wrap;
  white-space: nowrap;
  /* position: fixed; */
  height: 105px;
  background-color: ${({ theme }) => theme.colors.black};
  /* z-index: 1; */
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
        {/* <StyledH1> */}
        <LogoLink to={LANDING}>
          <img
            src={process.env.PUBLIC_URL + "/images/white-logo-dancer.png"}
            width="120px"
            alt="sharp dance"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/white-logo-name.png"}
            width="200px"
            alt="sharp dance"
            style={{ paddingTop: "10px" }}
          />
        </LogoLink>
        {/* </StyledH1> */}
      </LogoWrapper>
      <SideDrawer show={show} onClick={() => setShow(!show)} />
      <StyledNav />
      <DesktopSocialIcons />
      <HamburgerWrapper>
        <StyledHamburger onClick={() => setShow(!show)} />
      </HamburgerWrapper>
    </Wrapper>
  );
}
