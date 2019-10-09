import React, { useContext } from "react";
import { Grid, H3, A, Banner, Markdown, Page } from "../../styledGuide";
import Loading from "../Loading";
import { ResourcesContext, PagesContext } from "../../Providers";

const isDirector = ({ director }) => director;

export default function DianeSharp() {
  const { staff } = useContext(ResourcesContext).resourceObj;

  const director = staff ? staff.find(isDirector) : undefined;
  const { getPage } = useContext(PagesContext);
  const page = getPage("diane");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;

  return (
    <Page>
      <Banner {...headerBanner} />
      <Grid align="start">
        {director && (
          <>
            <Banner
              title={director.name}
              imgSrc={director.images}
              imgCredit={director.imgCredit}
            />
            <Markdown marginTop="XL">{director.bio}</Markdown>
          </>
        )}
        <Grid direction="row">
          <H3 justify="center" padding="L 0">
            Visit Diane Sharp Photos
          </H3>
          <A href={options.facebook} to="#" size={6} justify="center">
            Diane's Photos FaceBook
          </A>
          {/** TODO: see if Diane's photo site is still up and get the update link */}
          {/* <A href={options.website} to="#" size={6} justify="center">
            Diane's Photos Website
          </A> */}
        </Grid>
      </Grid>
    </Page>
  );
}
