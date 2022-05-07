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
  height: 105px;
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
  ${({ theme }) => theme.media.desktop`
  display: none
  `}
`;

const StyledNav = styled(Nav)`
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
  padding: 8px 16px;
`;

export function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoLink to={LANDING}>
          <img
            src={process.env.PUBLIC_URL + "/images/tabimage.jpg"}
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
      </LogoWrapper>
      <SideDrawer show={show} onClick={() => setShow(!show)} />
      <StyledNav />
      <HamburgerWrapper>
        <StyledHamburger onClick={() => setShow(!show)} />
      </HamburgerWrapper>
    </Wrapper>
  );
}
