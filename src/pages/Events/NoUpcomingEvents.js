import React from "react";
import { P, Img, Grid } from "../../styledGuide";

export default function NoUpcomingEvents() {
  return (
    <Grid justify="center">
      <Img
        size={6}
        margin="M"
        align="center"
        alt="puzzle"
        src="https://firebasestorage.googleapis.com/v0/b/sharp-dance.appspot.com/o/site%2Fmedia%2Fpuzzle%2F6.jpg?alt=media&token=e4ebd608-54c1-4aae-a0d3-5db4dd60511b"
      />
      <P justify="center">Currently no performances.</P>
    </Grid>
  );
}
