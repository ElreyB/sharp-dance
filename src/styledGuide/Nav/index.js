import React from "react";
import { useGrid } from "gymnast";
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
  PRESS
} from "../../constants";

const links = [
  {
    to: ABOUT,
    label: "About",
    sub: [
      { to: DIANE, label: "Diane Sharp-Nachsin" },
      { to: BIOS, label: "Company" },
      { to: MEDIA, label: "Repertoire" },
      {
        to: ABOUT,
        label: "About"
      }
    ]
  },
  { to: PRESS, label: "Press" },
  {
    to: EVENTS,
    label: "Performances",
    sub: [
      { to: EVENTS, label: "Upcoming Performances" },
      { to: PAST_EVENTS, label: "Past Performances" }
    ]
  },
  { to: CLASSES, label: "Classes" },
  { to: CONTACT, label: "Contact" },
  { to: DONATIONS, label: "Donations" }
];

export const Nav = React.forwardRef((props, ref) => {
  const [, allProps] = useGrid(props);

  return (
    <nav {...allProps} ref={ref}>
      <Ul>
        {links.map(({ to, label, sub = [] }) => (
          <Li to={to} key={label} label={label}>
            {sub.length > 0 && (
              <Ul
                key={`${label}-ul`}
                size="fit"
                show="desktop"
                direction="column"
                margin="2.5 0 0 0"
              >
                {sub.map(li => (
                  <Li {...li} key={li.label} size="fit" />
                ))}
              </Ul>
            )}
          </Li>
        ))}
      </Ul>
    </nav>
  );
});
