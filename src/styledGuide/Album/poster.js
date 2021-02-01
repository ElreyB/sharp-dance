import React from "react";
import { isImageURL } from "./utils";
import styled from "styled-components/macro";

import fallbackVideo from "./thumbnail.svg";

const width = 100;
const height = (width * 9) / 16;

const useThumbnail = (src) => {
  const [thumbnail, setThumbnail] = React.useState();

  React.useEffect(() => {
    async function fetchThumbnail() {
      const res = await window.fetch(`https://noembed.com/embed?url=${src}`);
      const json = await res.json();

      setThumbnail(
        json.thumbnail_url_with_play_button ||
          json.thumbnail_url ||
          fallbackVideo
      );
    }

    if (isImageURL(src)) {
      setThumbnail(src);
    } else {
      fetchThumbnail();
    }
  }, [src]);

  return thumbnail;
};

const Poster = styled.div`
  background-color: #eee;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 0;
  overflow: hidden;
  position: relative;
  width: ${width}px;
  height: ${height}px;
`;

export default ({ src, onClick }) => (
  <div onClick={onClick} size="fit" role="button" tabIndex={0} margin="XS">
    <Poster
      paddingBottom="S"
      style={{
        backgroundImage: `url(${useThumbnail(src)})`,
      }}
    />
  </div>
);
