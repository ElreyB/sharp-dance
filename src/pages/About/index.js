import React, { useContext } from "react";
import { Markdown, Img } from "../../styledGuide";
import Image from "../../styledGuide/Image";
import Loading from "../Loading";
import { OrganizationsContext, PagesContext } from "../../Providers";
import MainLayout from "../../layouts/MainLayout";
import styled from "styled-components/macro";

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
    <MainLayout headerBanner={headerBanner}>
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
    </MainLayout>
  );
}
