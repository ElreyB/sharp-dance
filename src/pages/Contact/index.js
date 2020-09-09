import React from "react";
import styled from "styled-components/macro";
import { Page, Banner, Grid, P, A, Label } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";
import { MailingListForm } from "../../styledGuide";

const ColorTitle = styled(Label)`
  color: ${({ theme }) => theme.colors.blue};
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
    <Page>
      <Banner {...headerBanner} />
      {mailingAddress && (
        <TitleLink marginTop="XL" title="Mailing Address">
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
        <P marginTop="L" marginBottom="M">
          {contactDescription}
        </P>
      )}
      {contactEmail && <EmailLink>{contactEmail}</EmailLink>}
      {contactPhone && <PhoneLink>{contactPhone}</PhoneLink>}
      <MailingListForm />
    </Page>
  );
}
