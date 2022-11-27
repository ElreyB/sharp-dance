import React, { useContext } from "react";
import { Markdown } from "../../styledGuide";
import Loading from "../Loading";
import { ResourcesContext, PagesContext } from "../../Providers";
// import { A } from "../../styledGuide";
// import styled from "styled-components/macro";
import Page from "../../layouts/Page";

const isDirector = ({ director }) => director;

// const FaceBookLink = styled(A)`
//   color: ${({ theme: { colors } }) => colors.mainTC};
//   justify-content: center;
// `;

export default function DianeSharp() {
  const { staff } = useContext(ResourcesContext).resourceObj;

  const director = staff ? staff.find(isDirector) : undefined;
  const { getPage } = useContext(PagesContext);
  const page = getPage("diane");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;
  const additonalInfo = {
    ...headerBanner,
    title: `${headerBanner.title}: ${director.name}`,
    images: director.images,
    imgCredit: director.imgCredit,
  };

  return (
    <Page headerBanner={additonalInfo}>
      <Markdown>{director.bio}</Markdown>
    </Page>
  );
}
