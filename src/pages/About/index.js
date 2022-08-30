import React, { useContext } from "react";
import { Markdown } from "../../styledGuide";
import Loading from "../Loading";
import { OrganizationsContext, PagesContext } from "../../Providers";
import styled from "styled-components/macro";
import Page from "../../layouts/Page";

const SponserTitle = styled.h2`
  margin-top: 30px;
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: start;
  margin: 0;
  width: 100%;
`;

const StyledImage = styled.div`
  margin: 8px;
  background-size: contain;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
`;
const StyledSponsors = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

// const ImageGroup = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// `;

// const StyledImage = styled(Image)`
//   /* width: 50%; */
// `;

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
          <StyledFooterContent>
            <SponserTitle>Affiliates and Donors</SponserTitle>
            <StyledSponsors>
              {organizations.map((org) => (
                <StyledImage
                  key={org.id}
                  alt={org.organization}
                  style={{ backgroundImage: `url("${org.logo.src}")` }}
                />
              ))}
            </StyledSponsors>
          </StyledFooterContent>
        </>
      )}
    </Page>
  );
}
