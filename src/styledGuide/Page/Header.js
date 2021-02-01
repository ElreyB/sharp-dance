import React from "react";
import styled from "styled-components/macro";
import { A } from "../A";
import { Nav } from "../Nav";
import { H1 } from "../Headings";
import SideDrawer from "../SideDrawer";
import HamburgerButton from "../HamburgerButton";
import { SocialIcons } from "../SocialIcons";
import { LANDING } from "../../constants";
import { useElementHeight } from "./useElementHeight";
import { SHARP_CO } from "../../constants";

const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.white};
`;
const StyledGrid = styled.div`
  position: fixed;
  height: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
`;
const UndecoratedA = styled(A)`
  text-decoration: none;
  font-size: 18px;
`;

const StyledHamburger = styled(HamburgerButton)`
  &[data-show-menu="true"] {
    opacity: 0;
  }
`;

const StyledNav = styled(Nav)`
  &[data-condensed-menu="false"] {
    pointer-events: none;
    visibility: hidden;
  }

  @media (max-width: 600px) {
    font-size: 0;
    flex-grow: 1;
  }
`;

export const Header = () => {
  const [show, setShow] = React.useState(false);
  const [ref, height] = useElementHeight();
  const condenseMenu = height > 45;

  return (
    <StyledGrid align="center" justify="center">
      <StyledH1 size="fit" margin="0 XL" noResize>
        <UndecoratedA to={LANDING}>{SHARP_CO}</UndecoratedA>
      </StyledH1>
      <SideDrawer show={show} onClick={() => setShow(!show)} />
      {!condenseMenu && <SocialIcons />}
      <StyledNav
        data-condensed-menu={condenseMenu ? "false" : "true"}
        ref={ref}
        size="auto"
      />
      {condenseMenu && (
        <StyledHamburger
          data-show-menu={show ? "true" : "false"}
          onClick={() => setShow(!show)}
        />
      )}
    </StyledGrid>
  );
};
