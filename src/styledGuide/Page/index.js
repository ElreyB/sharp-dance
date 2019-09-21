import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components/macro";
import { Footer } from "./Footer";
import { Header } from "./Header";

const PageContent = styled(Grid)`
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  z-index: 0;
`;

export const Page = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <PageContent
        {...props}
        align="start"
        padding="XL XL 2XL"
        marginLeft={{ mobile: 0, desktop: "XL" }}
        marginRight={{ mobile: 0, desktop: "XL" }}
        marginTop={{ mobile: "XL", desktop: 0 }}
      >
        {children}
      </PageContent>
      <Footer padding="M 2XL M" marginBottom="2XL" />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node
};
