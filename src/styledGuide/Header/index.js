import React from "react";
import styled from "styled-components/macro";
import { A } from "..";
import { LANDING } from "../../constants";
import HamburgerButton from "../HamburgerButton";
import { Nav } from "../Nav";
import SideDrawer from "../SideDrawer";

const Wrapper = styled.div`
  border: 0px solid transparent;
  display: flex;
  flex-flow: row wrap;
  white-space: nowrap;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
`;
const LogoLink = styled(A)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: block;
  padding-left: 5px;
`;

const StyledHamburger = styled(HamburgerButton)`
  align-self: center;
  ${({ theme }) => theme.media.desktop`
  display: none
  `}
`;

const StyledNav = styled(Nav)`
  @media (max-width: 1357px) and (min-width: 1184px) {
    font-size: 13px;
  }
  ${({ theme }) => theme.media.mobile`
  display: none
  `}
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 20px;
  height: 100%;
`;

const HamburgerWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  /* width: 10%; */
  // add mobile width: 16%;
`;

export function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoLink to={LANDING}>
          <img
            src={process.env.PUBLIC_URL + "/images/SHARP-logo.png"}
            width="355px"
            alt="sharp dance"
            style={{ paddingTop: "10px" }}
          />
        </LogoLink>
      </LogoWrapper>
      <SideDrawer show={show} onClick={() => setShow(!show)} />
      <StyledNav />
      <HamburgerWrapper>
        <StyledHamburger onClick={() => setShow(!show)} />
      </HamburgerWrapper>
    </Wrapper>
  );
}
