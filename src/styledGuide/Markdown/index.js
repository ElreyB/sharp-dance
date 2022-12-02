import React from "react";
import { marked } from "marked";
import styled from "styled-components/macro";

const Div = styled.div`
  & > p {
    width: auto !important;
  }
`;

export function Markdown({ children = "", ...props }) {
  return (
    <Div {...props} dangerouslySetInnerHTML={{ __html: marked(children) }} />
  );
}
