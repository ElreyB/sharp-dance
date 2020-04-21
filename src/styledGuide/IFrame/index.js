import React from "react";
import { Grid } from "gymnast";
import styled from "styled-components";

const StyledIframe = styled("iframe")`
  border: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  position: relative;
`;

export function IFrame({
  size,
  margin,
  padding,
  src,
  title,
  height,
  ...props
}) {
  return (
    <Grid {...{ margin, padding, size }} {...props}>
      <StyledIframe
        src={src}
        title={title}
        height={height}
        frameborder="0"
        allowfullscreen
      ></StyledIframe>
    </Grid>
  );
}
