import React from "react";
import styled from "styled-components/macro";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";

import { A } from "../../styledGuide/A/A";
import { P } from "../../styledGuide/P/P";
import { Label } from "../../styledGuide/Label/Label";
import Page from "../../layouts/Page";

const StyledP = styled(P)`
  padding-top: ${({ theme, pT }) => (pT ? theme.spacing[pT] : 0)};
  padding-bottom: ${({ theme, pB }) => (pB ? theme.spacing[pB] : 0)};
  padding-left: ${({ theme, pL }) => (pL ? theme.spacing[pL] : 0)};
  padding-right: ${({ theme, pR }) => (pR ? theme.spacing[pR] : 0)};
`;

const StyledA = styled(A)`
  padding-top: ${({ theme, pT }) => (pT ? theme.spacing[pT] : 0)};
  padding-bottom: ${({ theme, pB }) => (pB ? theme.spacing[pB] : 0)};
  padding-left: ${({ theme, pL }) =>
    pL ? theme.spacing[pL] : theme.spacing.S};
  padding-right: ${({ theme, pR }) =>
    pR ? theme.spacing[pR] : theme.spacing.S};

  margin-left: ${({ theme }) => theme.spacing.M}

  flex-grow: 0;
  flex-shrink: 0;
  width: auto;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  border: 0px solid transparent;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-grow: 1;
  padding-top: ${({ theme, pT }) => (pT ? theme.spacing[pT] : 0)};
`;

const ColorTitle = styled(Label)`
  color: ${({ theme }) => theme.colors.blue};
`;

function TitleLink({ title, href, children, ...props }) {
  if (!children) {
    return null;
  }

  const Component = href ? StyledA : StyledP;

  return (
    <Wrapper {...props}>
      <ColorTitle margin={0} size="fit">
        {title}:
      </ColorTitle>
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

  const { options = {}, pageName, ...headerBanner } = page;

  const {
    contactDescription,
    contactEmail,
    contactPhone,
    email,
    facebookTitle,
    facebookURL,
    mailingAddress,
    phone,
  } = options;

  return (
    <Page headerBanner={headerBanner}>
      {mailingAddress && (
        <TitleLink pT="XL" title="Mailing Address">
          {mailingAddress}
        </TitleLink>
      )}
      {phone && <PhoneLink>{phone}</PhoneLink>}
      {email && <EmailLink>{email}</EmailLink>}
      {facebookTitle && facebookURL && (
        <TitleLink title="Facebook" href={facebookURL}>
          {facebookTitle}
        </TitleLink>
      )}
      {contactDescription && (
        <StyledP pT="L" pB="M">
          {contactDescription}
        </StyledP>
      )}
      {contactEmail && <EmailLink>{contactEmail}</EmailLink>}
      {contactPhone && <PhoneLink>{contactPhone}</PhoneLink>}
    </Page>
  );
}
