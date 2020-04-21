import { Grid } from "gymnast";
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import { useWindowResize } from "./useWindowSize";

const headerHeight = 44;
const StyledPlayer = styled(ReactPlayer)`
  margin: auto;
`;
const StyledGrid = styled(Grid)`
  position: relative;
  width: 100vw;
  height: 100%;
`;
export const FullPageVideo = styled(({ src, className }) => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState("100vh");

  function resize() {
    const { wrapper } = ref.current || {};

    if (wrapper) {
      const iframe = wrapper.querySelector("iframe");

      if (iframe) {
        const newHeight = `${iframe.getBoundingClientRect().height}px`;

        if (height !== newHeight) {
          setHeight(newHeight);
        }
      }
    }
  }

  useWindowResize(resize);

  return (
    <StyledGrid>
      <Video
        muted
        playing
        src={src}
        ref={ref}
        className={className}
        width="100%"
        height={height}
        onPlay={resize}
        onProgress={resize}
        loop
      />
    </StyledGrid>
  );
})`
  & iframe {
    box-sizing: border-box;
    left: 50%;
    min-height: calc(100vh - ${headerHeight}px);
    min-width: 100vw;
    transform: translateX(-50%);
    position: absolute;
    height: 56.25vw !important;
    width: 177.77777778vh !important;
  }
`;

export const Video = React.forwardRef(
  ({ src, controls = false, ...props }, ref) => {
    if (!src) {
      return null;
    }

    return (
      <StyledPlayer
        url={src}
        ref={ref}
        {...props}
        controls={controls}
        config={
          controls
            ? undefined
            : { vimeo: { playerOptions: { background: true } } }
        }
      />
    );
  }
);
