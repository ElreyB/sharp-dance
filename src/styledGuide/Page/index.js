import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components/macro";
import { Nav } from "../Nav";

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
          { to: "/", label: "Home" },
          { to: "/bios", label: "Bio's" },
          { to: "/events", label: "Events" },
          { to: "/about", label: "About" },
          { to: "/admin", label: "Admin" }
        ]}
      />
      {children}
    </PageContent>
  );
};

Page.propTypes = {
  children: PropTypes.node
};
