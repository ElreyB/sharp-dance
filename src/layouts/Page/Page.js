import React from "react";
import { node } from "prop-types";
import { Banner, Footer } from "../../styledGuide";
import styled, { css } from "styled-components/macro";

const PageContent = styled.div(
  ({ theme }) => css`
    max-width: 1050px;
    margin: 50px auto;
    min-height: 100vh;
    padding: ${theme.spacing.XL};
  `
);

export default function Page({ children, headerBanner, ...props }) {
  return (
    <PageContent {...props}>
      {headerBanner && <Banner {...headerBanner} />}
      {children}
    </PageContent>
  );
}

Page.propTypes = {
  children: node.isRequired,
};
