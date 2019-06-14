import * as React from "react";
import { Grid, HeaderBanner } from "../../styledGuide";

export default function Home() {
  const data = {
    title: "SHARP",
    subtitle: "Dance Company",
    headerImage:
      "http://www.sharpdance.org/SHARP_Dance_Company/Home_files/droppedImage.jpg"
  };
  return (
    <Grid>
      <HeaderBanner
        title={data.title}
        subtitle={data.subtitle}
        src={data.headerImage}
      />
    </Grid>
  );
}
