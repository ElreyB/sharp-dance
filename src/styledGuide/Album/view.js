import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { isImageURL } from "./utils";

const StyledView = styled("div")`
  line-height: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 90vw;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const StyledPlayer = styled(ReactPlayer)`
  margin: auto;
`;

export default function View({ data, views, currentIndex }) {
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    setPlaying(views[currentIndex].src === data.src);

    return () => setPlaying(false);
  }, [currentIndex, data, views]);

  return (
    <StyledView>
      {isImageURL(data.src) ? (
        <img src={data.src} alt="" />
      ) : (
        <StyledPlayer url={data.src} playing={playing} controls />
      )}
    </StyledView>
  );
}
