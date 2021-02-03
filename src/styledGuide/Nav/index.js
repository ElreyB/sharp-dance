import React from "react";
import { Ul } from "./Ul";
import { Li } from "./Li";
import {
  ABOUT,
  BIOS,
  CLASSES,
  CONTACT,
  DIANE,
  DONATIONS,
  EVENTS,
  MEDIA,
  PAST_EVENTS,
  PRESS,
  // TICKETS,
} from "../../constants";
import styled from "styled-components";

const links = [
  {
    to: ABOUT,
    label: "About",
    sub: [
      { to: DIANE, label: "Diane Sharp-Nachsin" },
      { to: BIOS, label: "Company" },
      { to: MEDIA, label: "Repertoire" },
    ],
  },
  // TODO: better way to show or remove link
  // { to: TICKETS, label: "Tickets" },
  { to: PRESS, label: "Press" },
  {
    to: EVENTS,
    label: "Performances",
    sub: [
      { to: EVENTS, label: "Upcoming Performances" },
      { to: PAST_EVENTS, label: "Past Performances" },
    ],
  },
  { to: CLASSES, label: "Classes" },
  { to: CONTACT, label: "Contact" },
  { to: DONATIONS, label: "Donations" },
];

const StyledNav = styled.nav``;

const StyledUl = styled(Ul)`
  height: 100%;
`;

const SubUl = styled(Ul)`
  border-top: 20px solid transparent;
`;

export const Nav = React.forwardRef((props, ref) => {
  return (
    <StyledNav {...props}>
      <StyledUl>
        {links.map(({ to, label, sub = [] }) => (
          <Li
            to={to}
            key={label}
            label={label}
            onBlur={() => {
              console.log("li", "blur");
            }}
          >
            {sub.length > 0 && (
              <SubUl key={`${label}-ul`}>
                {sub.map((li) => (
                  <Li {...li} key={li.label} />
                ))}
              </SubUl>
            )}
          </Li>
        ))}
      </StyledUl>
    </StyledNav>
  );
});
