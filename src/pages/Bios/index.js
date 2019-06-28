import React, { useState, useEffect } from "react";
import { Grid, Bio, H2, Banner, Markdown, Page } from "../../styledGuide";
import data from "../../data.json";
import { getDB } from "../../fbconfig";

export default function Bios() {
  const [database, setDatabase] = useState({});
  const getBio = bio => <Bio {...bio} key={bio.name} />;

  useEffect(() => {
    getDB().then(value => setDatabase(value));
  }, []);

  if (database.pages) {
    console.log(database.pages.bios.headerBanner);
    const { pages, performers, apprentices, guestPerformers, staff } = database;
    return (
      <Page>
        <Banner {...pages.bios.headerBanner} />
        <Grid align="start">
          {performers.length > 0 && performers.map(getBio)}
          {apprentices.length > 0 && (
            <>
              <H2>Apprentices</H2>
              {apprentices.map(getBio)}
            </>
          )}
          {guestPerformers.length > 0 && (
            <>
              <H2>Guest Performers</H2>
              {guestPerformers.map(getBio)}
            </>
          )}
          <Banner {...pages.bios.aboutDianeBanner} />
          <Markdown marginTop="L">{pages.bios.aboutDianeText}</Markdown>
          {staff.length > 0 && staff.map(getBio)}
        </Grid>
      </Page>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
