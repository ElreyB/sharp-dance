import React, { useContext } from "react";
import { Markdown } from "../../styledGuide";
import Image from "../../styledGuide/Image";
import Loading from "../Loading";
import { OrganizationsContext, PagesContext } from "../../Providers";
import styled from "styled-components/macro";
import Page from "../../layouts/Page";

const H2 = styled.h2`
  text-align: center;
  margin: 20px;
`;

const ImageGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledImage = styled(Image)`
  /* width: 50%; */
`;

export default function About() {
  const organizations = useContext(OrganizationsContext);
  const { getPage } = useContext(PagesContext);

  const page = getPage("about");

  if (!page) {
    return <Loading />;
  }

  const { options = {}, pageName, ...headerBanner } = page;

  return (
    <Page headerBanner={headerBanner}>
      <Markdown>{options.content}</Markdown>
      {organizations && (
        <>
          <H2>Members</H2>
          <ImageGroup>
            {organizations.map((org) => (
              <StyledImage
                alt={org.organization}
                src={org.logo}
                key={org.organization}
              />
            ))}
          </ImageGroup>
        </>
      )}
    </Page>
  );
}
