import React, { useContext } from "react";
import { H3, Markdown, Banner } from "../../styledGuide";
import Loading from "../Loading";
import { ResourcesContext, PagesContext } from "../../Providers";
import { A } from "../../styledGuide/A/A";
import styled from "styled-components/macro";
import Page from "../../layouts/Page";

const isDirector = ({ director }) => director;

const FaceBookLink = styled(A)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

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
    <Page headerBanner={headerBanner}>
      <div align="start">
        {director && (
          <>
            <Banner
              title={director.name}
              images={director.images}
              imgCredit={director.imgCredit}
            />
            <Markdown marginTop="XL">{director.bio}</Markdown>
          </>
        )}
        <div direction="row">
          <H3 justify="center" padding="L 0">
            Visit Diane Sharp Photos
          </H3>
          <FaceBookLink href={options.facebook}>
            Diane's Photos FaceBook
          </FaceBookLink>
        </div>
      </div>
    </Page>
  );
}
