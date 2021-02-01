import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { TiTicket, TiGlobeOutline } from "react-icons/ti";
import { P } from "../P/P";
import { H3 } from "../Headings";

function IconAnchor({ Icon, url }) {
  if (!url) {
    return null;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

const monthName = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const StyledH3 = styled(H3)`
  white-space: normal;
  max-width: 100%;
`;

export const Schedule = ({
  address,
  dates,
  description,
  location,
  margin,
  name,
  padding,
  purchaseUrl,
  size,
  website,
}) => {
  return (
    <div size={size} margin={margin} padding={padding}>
      <div>
        {name && <StyledH3 size="fit">{name}</StyledH3>}
        <IconAnchor url={purchaseUrl} Icon={TiTicket} />
        <IconAnchor url={website} Icon={TiGlobeOutline} />
      </div>
      {description && <P>{description}</P>}
      <div size={{ mobile: "auto", desktop: "fit" }}>
        {(location || address) && (
          <P>{[location, address].filter((a) => !!a).join(" - ")}</P>
        )}
      </div>
      <div>
        {dates.map(({ days, month, time, notes }, i) => (
          <div key={i}>
            <div size="fit" paddingRight="S">
              {monthName[month]}, {days}
            </div>
            <div size="fit" paddingRight="S">
              {time}
            </div>
            <div size="fit">{notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

Schedule.propTypes = {
  address: PropTypes.string,
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      days: PropTypes.string,
      month: PropTypes.number,
      year: PropTypes.number,
      time: PropTypes.string,
      notes: PropTypes.string,
    })
  ),
  description: PropTypes.string,
  footnote: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  pricing: PropTypes.string,
  purchaseUrl: PropTypes.string,
  website: PropTypes.string,
};
