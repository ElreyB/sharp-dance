import React from "react";
import { node } from "prop-types";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  z-index: 0;
  padding-top: 46px;
`;

const Main = styled.main``;

export default function MainLayout({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <Main>{children}</Main>
    </Wrapper>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};
