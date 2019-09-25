import React, { useContext } from "react";
import { Grid, H2, Banner, Markdown, Img, Page } from "../../styledGuide";
import Loading from "../Loading";
import { OrganizationsContext, PagesContext } from "../../Providers";

export default function About() {
  const organizations = useContext(OrganizationsContext);
  const { getPage } = useContext(PagesContext);

  const page = getPage("about");

  if (!page) {
    return <Loading />;
  }

  const { options = {}, pageName, ...headerBanner } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
      <Grid align="start">
        <Markdown>{options.content}</Markdown>
        {organizations && (
          <Grid justify="center">
            <H2>Members</H2>
            {organizations.map(org => (
              <Img
                size="fit"
                margin="M"
                align="center"
                alt={org.organization}
                src={org.logo}
                key={org.organization}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </Page>
  );
}
