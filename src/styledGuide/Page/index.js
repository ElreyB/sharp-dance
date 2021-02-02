import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

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
      <PageContent {...props}>{children}</PageContent>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};
