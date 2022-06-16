import { node } from "prop-types";
import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  margin: 0 auto;
  z-index: 0;
`;

const Main = styled.main`
  position: relative;
`;

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
