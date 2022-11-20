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
import { FaRegCopyright } from "react-icons/fa";

// const DesktopSocialIcons = styled(SocialIcons)`
//   display: block;
//   margin: 64px auto;
//   text-align: center;
//   max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
// `;

const StyledFooter = styled.footer`
  background-color: black;
`;

const FooterActions = styled.div`
  display: flex;
  color: white;
  padding: 10px 35px;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme }) => theme.media.mobile`
    display: none;
  `}
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex-basis: 25%;
  /* margin: 0; */

  &:nth-child(4) {
    flex-basis: 100%;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const Credit = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: white;
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

const Img = styled.img`
  width: 50%;
  margin: 20px auto;
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`;

// const FooterCredit = styled.div``;

const peopleLinks = [
  { to: ABOUT, label: "About" },
  // TODO: better way to show or remove link
  // { to: INTENSIVE, label: "Intensive" },
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
      <StyledFooterContent>
        <Img
          src={process.env.PUBLIC_URL + "/images/sharp-logo-image-up-2.svg"}
          alt="sharp dance"
        />
        <Mailchimp />
      </StyledFooterContent>
      <FooterActions>
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
      </FooterActions>
      <Credit>
        <p>
          <FaRegCopyright />
          2022 SHARP Dance Company
        </p>
        <p>Website by: Elrey Belmonti</p>
        <p>
          Photos by: Bill Eberther, Rich Ryan, Kylene Claver, Diane Sharp,
          Desiree Ortman, Ed Flores, Andrew Bernstein
        </p>
      </Credit>
    </StyledFooter>
  );
}
