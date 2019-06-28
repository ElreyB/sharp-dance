import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components/macro";
import { Nav } from "../Nav";
import { ABOUT, ADMIN, BIOS, EVENTS, LANDING, LOG_IN } from "../../constants";

const PageContent = styled(Grid)`
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
`;

export const Page = ({ children, ...props }) => {
  return (
    <PageContent {...props} align="start" padding="M 2XL 2XL">
      <Nav
        links={[
          { to: LANDING, label: "Home" },
          { to: BIOS, label: "Bio's" },
          { to: EVENTS, label: "Events" },
          { to: ABOUT, label: "About" },
          { to: LOG_IN, label: "Login" },
          { to: ADMIN, label: "Admin" }
        ]}
      />
      {children}
    </PageContent>
  );
};

Page.propTypes = {
  children: PropTypes.node
};
