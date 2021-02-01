import React from "react";
import styled from "styled-components/macro";
import { isImageURL } from "./utils";

import { Video } from "../Video";

const StyledView = styled("div")`
  line-height: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 90vw;
  position: relative;
  text-align: center;
  overflow: hidden;
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
        <Video src={data.src} playing={playing} controls />
      )}
    </StyledView>
  );
}
