import React, { useContext } from "react";
import { H3, Markdown } from "../../styledGuide";
import Loading from "../Loading";
import { ResourcesContext, PagesContext } from "../../Providers";
import { A } from "../../styledGuide";
import styled from "styled-components/macro";
import Page from "../../layouts/Page";

const isDirector = ({ director }) => director;

const FaceBookLink = styled(A)`
  justify-content: center;
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
  console.log("Diane", { headerBanner });
  const additonalInfo = {
    ...headerBanner,
    title: `${headerBanner.title} : ${director.name}`,
    images: director.images,
    imgCredit: director.imgCredit,
  };

  return (
    <Page headerBanner={additonalInfo}>
      <Markdown>{director.bio}</Markdown>
      <H3>
        Visit Diane Sharp Photos - {""}
        <FaceBookLink href={options.facebook}>
          Diane's Photos FaceBook
        </FaceBookLink>
      </H3>
    </Page>
  );
}
