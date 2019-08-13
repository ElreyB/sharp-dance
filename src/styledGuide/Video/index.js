import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const StyledPlayer = styled(ReactPlayer)`
  margin: auto;
`;

export const BackgroundVideo = styled(({ src, className }) => {
  return (
    <Video
      muted
      playing
      src={src}
      className={className}
      width="100%"
      height="100%"
      loop
    />
  );
})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  & iframe {
    box-sizing: border-box;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
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
