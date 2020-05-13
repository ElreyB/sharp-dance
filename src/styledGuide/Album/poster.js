import React from "react";
import { isImageURL } from "./utils";
import { Grid } from "gymnast";
import styled from "styled-components";

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

const Poster = styled(Grid)`
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
  <Grid onClick={onClick} size="fit" role="button" tabIndex={0} margin="XS">
    <Poster
      paddingBottom="S"
      style={{
        backgroundImage: `url(${useThumbnail(src)})`,
      }}
    />
  </Grid>
);
