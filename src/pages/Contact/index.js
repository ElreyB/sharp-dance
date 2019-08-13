import React from "react";
import styled from "styled-components";
import { findPage } from "../../utils";
import { Page, Banner, P, A, Label } from "../../styledGuide";

const ColorTitle = styled(Label)`
  color: ${({ theme }) => theme.colors.red};
`;

function TitleLink({ title, href, children, ...props }) {
  if (!children) {
    return null;
  }

  const Component = href ? A : P;

  return (
    <P {...props}>
      <ColorTitle margin={0} size="fit">
        {title}:
      </ColorTitle>
      <Component size="fit" marginLeft="M" href={href}>
        {children}
      </Component>
    </P>
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

export default function Contact({ pages }) {
  const contact = findPage(pages, "contact");

  if (!contact) {
    return null;
  }

  const {
    contactDescription,
    contactEmail,
    contactPhone,
    email,
    facebookTitle,
    facebookURL,
    mailingAddress,
    phone
  } = contact;

  return (
    <Page>
      <Banner {...contact.headerBanner} />
      <TitleLink marginTop="XL" title="Mailing Address">
        {mailingAddress}
      </TitleLink>
      <PhoneLink>{phone}</PhoneLink>
      <EmailLink>{email}</EmailLink>
      <TitleLink title="Facebook" href={facebookURL}>
        {facebookTitle}
      </TitleLink>
      <P marginTop="2XL" marginBottom="M">
        {contactDescription}
      </P>
      <EmailLink>{contactEmail}</EmailLink>
      <PhoneLink>{contactPhone}</PhoneLink>
    </Page>
  );
}
