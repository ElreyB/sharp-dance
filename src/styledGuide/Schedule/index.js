import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { TiTicket, TiGlobeOutline } from "react-icons/ti";
import { P } from "../P/P";
// import { H3 } from "../Headings";

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

const Wrapper = styled.div``;

const H3 = styled.h3`
  text-align: center;
  /* color: ${({ theme }) => theme.colors.blue}; */
`;

const Description = styled(P)``;
const Location = styled(P)`
  /* color: ${({ theme }) => theme.colors.red}; */
`;
const DateTime = styled(P)`
  /* color: ${({ theme }) => theme.colors.blue}; */
`;

export const Schedule = ({
  address,
  dates,
  description,
  location,
  name,
  purchaseUrl,
  website,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {name && <H3>{name}</H3>}
      <IconAnchor url={purchaseUrl} Icon={TiTicket} />
      <IconAnchor url={website} Icon={TiGlobeOutline} />
      {description && <Description>{description}</Description>}
      {(location || address) && (
        <Location>
          {[location, address].filter((a) => !!a).join(" - ")}
        </Location>
      )}
      {dates.map(({ days, month, time, notes }, i) => (
        <DateTime key={i}>
          {monthName[month]}, {days} {time} {notes}
        </DateTime>
      ))}
    </Wrapper>
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
