import React from "react";
import styled from "styled-components/macro";
import Page from "../../layouts/Page";
import { PagesContext } from "../../Providers";
import { A, Label, P } from "../../styledGuide";
import Loading from "../Loading";

const StyledP = styled(P)``;

const Description = styled(P)`
  font-weight: 900;
  font-size: 20px;
`;

const StyledA = styled(A)`
  padding-top: ${({ theme, pT }) => (pT ? theme.spacing[pT] : 0)};
  padding-bottom: ${({ theme, pB }) => (pB ? theme.spacing[pB] : 0)};
  padding-left: ${({ theme, pL }) =>
    pL ? theme.spacing[pL] : theme.spacing.S};
  padding-right: ${({ theme, pR }) =>
    pR ? theme.spacing[pR] : theme.spacing.S};

  margin-left: ${({ theme }) => theme.spacing.M}
  width: auto;
  white-space: nowrap;
  color: inherit;
`;

const Wrapper = styled.div`
  border: 0px solid transparent;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-grow: 1;
  color: black;
`;

const ColorTitle = styled(Label)`
  color: ${({ theme }) => theme.colors.black};
  margin-right: 10px;
`;

function TitleLink({ title, href, children, ...props }) {
  if (!children) {
    return null;
  }

  const Component = href ? StyledA : StyledP;

  return (
    <Wrapper {...props}>
      <ColorTitle>{title}:</ColorTitle>
      <Component pL="M" href={href}>
        {children}
      </Component>
    </Wrapper>
  );
}

function PhoneLink({ children, ...props }) {
  const formatted = (children || "").replace(/\D+/g, "");

  return (
    <TitleLink title="Phone" href={`tel:1-${formatted}`} {...props}>
      {children}
    </TitleLink>
  );
}

function EmailLink({ children, ...props }) {
  return (
    <TitleLink title="Email" href={`mailto:${children}`} {...props}>
      {children}
    </TitleLink>
  );
}

export default function Contact() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("contact");

  if (!page) {
    return <Loading />;
  }

  const { pageName, ...headerBanner } = page;

  // const {
  //   contactDescription,
  //   contactEmail,
  //   contactPhone,
  //   email,
  //   facebookTitle,
  //   facebookURL,
  //   mailingAddress,
  //   phone,
  // } = options;

  return (
    <Page headerBanner={headerBanner}>
      <Description>
        For Residency or Performance Information please contact our agents:
      </Description>
      <StyledP>Jennifer Morris of Siegel Artist Management</StyledP>
      <TitleLink pT="XL" title="Mailing Address">
        18 Amherst Ave Wilkes-Barre, PA 18702
      </TitleLink>
      <PhoneLink>570-258-5700 X 101</PhoneLink>
      <br />
      <Description>For any other information please contact:</Description>
      <StyledP>Nikki Battestilli, Company Manager</StyledP>
      <EmailLink>Nikki@sharpdance.org</EmailLink>
      <PhoneLink>814.952.5573</PhoneLink>
      <br />
      <StyledP>Diane Sharp-Nachsin, Artistic Director</StyledP>
      <EmailLink>Diane@sharpdance.org</EmailLink>
      <PhoneLink>215-880-2306</PhoneLink>
      <br />
      <TitleLink pT="XL" title="Company Mailing address">
        1420 Locust Street 33 F Philadelphia PA 19102
      </TitleLink>
    </Page>
  );
}
