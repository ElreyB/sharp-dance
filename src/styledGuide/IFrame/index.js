import React from "react";
import styled from "styled-components/macro";

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
    <div {...{ margin, padding, size }} {...props}>
      <StyledIframe
        src={src}
        title={title}
        height={height}
        frameborder="0"
        allowfullscreen
      ></StyledIframe>
    </div>
  );
}
