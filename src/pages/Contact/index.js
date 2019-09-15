import React from "react";
import styled from "styled-components";
import { Page, Banner, Grid, P, A, Label } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";

const ColorTitle = styled(Label)`
  color: ${({ theme }) => theme.colors.red};
`;

function TitleLink({ title, href, children, ...props }) {
  if (!children) {
    return null;
  }

  const Component = href ? A : P;

  return (
    <Grid {...props}>
      <ColorTitle margin={0} size="fit">
        {title}:
      </ColorTitle>
      <Component size="fit" marginLeft="M" href={href}>
        {children}
      </Component>
    </Grid>
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

  const { options = {}, headerBanner } = page;

  const {
    contactDescription,
    contactEmail,
    contactPhone,
    email,
    facebookTitle,
    facebookURL,
    mailingAddress,
    phone
  } = options;

  return (
    <Page>
      <Banner {...headerBanner} />
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
