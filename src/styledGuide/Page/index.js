import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Header } from "./Header";

const PageContent = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  z-index: 0;
`;

export const Page = ({ children, ...props }) => {
  return (
    <>
      {/* <Header /> */}
      <PageContent
        {...props}
        align="start"
        padding="2XL XL"
        marginLeft={{ mobile: 0, desktop: "XL" }}
        marginRight={{ mobile: 0, desktop: "XL" }}
        marginTop={{ mobile: "XL", desktop: "L" }}
      >
        {children}
      </PageContent>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};
