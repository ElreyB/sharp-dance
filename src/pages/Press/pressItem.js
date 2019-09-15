import React from "react";
import { Grid, Img, H3, P, A } from "../../styledGuide";

export function PressItem({
  author,
  date,
  description,
  image,
  logo,
  outlet,
  url
}) {
  /*
author: "Grace Maiorano"
date: "07/13/15"
description: ""
outlet: "The Temple News"
url: "https://temple-news.com/philadelphia-dance-company-tours-us-and-europe/"
*/

  return (
    <Grid marginBottom="XL" align="start">
      {!logo.src && <H3>{outlet}</H3>}
      <Img backgroundSize="contain" size={3} src={logo.src} alt={logo.title} />
      <Grid size="auto" align="start">
        {description && <P size={12}>{description}</P>}
        {author && (
          <Grid justify="end" size="fit">
            by {author}
          </Grid>
        )}
        {date && (
          <Grid justify="end" size="fit" marginLeft="S">
            on {date}
          </Grid>
        )}
      </Grid>
      {image.src && (
        <Img backgroundSize="contain" src={image.src} alt={image.title} />
      )}
    </Grid>
  );
}
