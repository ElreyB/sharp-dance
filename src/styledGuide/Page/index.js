import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components/macro";
import { Nav } from "../Nav";
import { ABOUT, BIOS, CLASSES, EVENTS, LANDING, MEDIA } from "../../constants";
import { Footer } from "./Footer";

const PageContent = styled(Grid)`
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  z-index: 0;
`;
const StyledNav = styled(Nav)`
  position: fixed;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
`;

export const Page = ({ children, links, ...props }) => {
  return (
    <>
      <StyledNav
        links={[
          { to: LANDING, label: "Home" },
          { to: BIOS, label: "Bio's" },
          { to: MEDIA, label: "Media" },
          { to: EVENTS, label: "Events" },
          { to: CLASSES, label: "Classes" },
          { to: ABOUT, label: "About" }
        ]}
      />
      <PageContent {...props} align="start" padding="XL 2XL 2XL">
        {children}
      </PageContent>
      <Footer padding="M 2XL M" />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node
};
