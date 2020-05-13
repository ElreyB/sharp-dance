import React from "react";
import { Grid } from "gymnast";
import textfit from "textfit";
import styled from "styled-components/macro";

import { withGrid } from "../internal";
import { useElementWidth } from "./useElementWidth";

function fitWrapper(Component, maxFontSize) {
  const Styled = styled(withGrid(Component))`
    margin: 0;
  `;
  return ({ children, noResize, ...props }) => {
    const [ref, width, node] = useElementWidth();
    React.useLayoutEffect(() => {
      if (node && children && !noResize) {
        textfit(node, {
          widthOnly: true,
          alignHoriz: true,
          detectMultiLine: false,
          maxFontSize,
        });
      }
    }, [node, children, noResize, width]);

    return (
      <Grid ref={ref} justify="center" {...props}>
        {children && <Styled>{children}</Styled>}
      </Grid>
    );
  };
}

export const H1 = fitWrapper("h1", 18);
export const H2 = fitWrapper("h2", 16);
export const H3 = fitWrapper("h3", 15);
export const H4 = fitWrapper("h4", 14);
