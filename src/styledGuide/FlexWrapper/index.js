import React from "react";
import { node } from "prop-types";
import styled from "styled-components/macro";

const Div = styled.div`
  border: 0px solid transparent;
  display: flex;
  flex-flow: row wrap;
  flex-grow: 0;
  flex-shrink: 0;
  width: auto;
  white-space: nowrap;
`;

export default function FlexWrapper({ children, ...props }) {
  return <Div {...props}>{children}</Div>;
}

FlexWrapper.propTypes = {
  children: node.isRequired,
};
