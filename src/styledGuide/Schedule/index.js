import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { TiTicket, TiGlobeOutline } from "react-icons/ti";
import { IconContext } from "react-icons";
import { P } from "../P";
import { A } from "../A";

const StyledA = styled(A)`
  ${({ theme: { media } }) => media.mobile`
    text-align: center;
  `}
`;

function IconAnchor({ Icon, url }) {
  if (!url) {
    return null;
  }

  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <StyledA href={url} target="_blank" rel="noopener noreferrer">
        <Icon />
      </StyledA>
    </IconContext.Provider>
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
  flex: 1;
  /* color: ${({ theme }) => theme.colors.blue}; */
`;

const Description = styled(P)``;
const Location = styled(P)`
  /* color: ${({ theme }) => theme.colors.red}; */
`;
const DateTime = styled(P)`
  /* color: ${({ theme }) => theme.colors.blue}; */
`;

const Header = styled.header`
  display: flex;
  ${({ theme: { media } }) => media.mobile`
    flex-direction: column;
  `}
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
      <Header>
        {name && <H3>{name}</H3>}
        <IconAnchor url={purchaseUrl} Icon={TiTicket} />
        <IconAnchor url={website} Icon={TiGlobeOutline} />
      </Header>
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
