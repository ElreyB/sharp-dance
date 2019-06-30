import React from "react";
import ReactPlayer from "react-player";
import { Grid } from "gymnast";
import { isImageURL } from "./utils";

const Footer = ({ interactionIsIdle, ...props }) => (
  <div
    style={{
      alignItems: "center",
      bottom: 0,
      display: "flex ",
      left: 0,
      opacity: interactionIsIdle ? 0 : 1,
      padding: 10,
      paddingRight: 15,
      position: "absolute",
      right: 0,
      transition: "opacity 300ms",
      background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.44))"
    }}
    {...props}
  />
);

export default function View({ data, interactionIsIdle, views, currentIndex }) {
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    setPlaying(views[currentIndex].src === data.src);

    return () => setPlaying(false);
  }, [currentIndex, data, views]);

  return (
    <Grid
      justify="center"
      style={{
        backgroundColor: "black",
        lineHeight: 0
      }}
    >
      {isImageURL(data.src) ? (
        <img src={data.src} alt="" />
      ) : (
        <ReactPlayer url={data.src} playing={playing} controls />
      )}
      <Footer interactionIsIdle={interactionIsIdle}></Footer>
    </Grid>
  );
}
