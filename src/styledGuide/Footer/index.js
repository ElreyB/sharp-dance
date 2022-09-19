import React from "react";
import styled from "styled-components/macro";
// import { SocialIcons } from "../SocialIcons";
import { Mailchimp } from "../Mailchimp";
import { A } from "../A";
import {
  ABOUT,
  BIOS,
  CLASSES,
  CONTACT,
  DIANE,
  DONATIONS,
  EVENTS,
  MEDIA,
  // PAST_EVENTS,
  // PRESS,
} from "../../constants";

// const DesktopSocialIcons = styled(SocialIcons)`
//   display: block;
//   margin: 64px auto;
//   text-align: center;
//   max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
// `;

const StyledFooter = styled.footer`
  display: flex;
  background-color: black;
  color: white;
  padding: 10px 35px 10px 0;
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
  margin-top: 100px;
  margin-left: 50px;

  & :last-child {
    width: 100%;
    margin-left: 0;
  }
`;

// const StyledImage = styled.div`
//   margin: 8px;
//   background-size: contain;
//   width: 200px;
//   height: 200px;
//   background-repeat: no-repeat;
//   background-position: center;
// `;
// const StyledSponsors = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

//  <StyledFooterContent>
//    <StyledSponsors>
//      {orgs.map((org) => (
//        <StyledImage
//          key={org.id}
//          alt={org.organization}
//          style={{ backgroundImage: `url("${org.logo.src}")` }}
//        />
//      ))}
//    </StyledSponsors>
//  </StyledFooterContent>;

const NavLink = styled(A)`
  flex-basis: 100%;
  color: white;
`;

const LinkHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const peopleLinks = [
  { to: ABOUT, label: "About" },
  // TODO: better way to show or remove link
  // { to: TICKETS, label: "Tickets" },
  { to: DIANE, label: "Diane Sharp-Nachsin" },
  { to: BIOS, label: "SHARP Family" },
];

const informationLinks = [
  { to: MEDIA, label: "Repertoire" },
  {
    to: EVENTS,
    label: "Performances",
  },
  { to: CLASSES, label: "Classes" },
];

const supportLinks = [
  { to: CONTACT, label: "Contact" },
  { to: DONATIONS, label: "Donations" },
];

export function Footer() {
  return (
    <StyledFooter>
      <img
        src={process.env.PUBLIC_URL + "/images/sharp-logo-image-up-2.svg"}
        height="50%"
        alt="sharp dance"
      />
      <StyledFooterContent>
        <LinkHeader>Company</LinkHeader>
        {peopleLinks.map(({ to, label }) => (
          <NavLink to={to} key={to}>
            {label}
          </NavLink>
        ))}
      </StyledFooterContent>
      <StyledFooterContent>
        <LinkHeader>Information</LinkHeader>
        {informationLinks.map(({ to, label }) => (
          <NavLink to={to} key={to}>
            {label}
          </NavLink>
        ))}
      </StyledFooterContent>
      <StyledFooterContent>
        <LinkHeader>Support</LinkHeader>
        {supportLinks.map(({ to, label }) => (
          <NavLink to={to} key={to}>
            {label}
          </NavLink>
        ))}
      </StyledFooterContent>
      <StyledFooterContent>
        <Mailchimp />
      </StyledFooterContent>
    </StyledFooter>
  );
}
