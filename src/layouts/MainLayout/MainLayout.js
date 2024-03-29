import { node } from "prop-types";
import React from "react";
import styled from "styled-components/macro";
import { Footer } from "../../styledGuide";

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
      <Footer />
    </Wrapper>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};
