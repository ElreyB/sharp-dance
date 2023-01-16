import PropTypes from "prop-types";
import React from "react";
import { IconContext } from "react-icons";
import { TiGlobeOutline, TiTicket } from "react-icons/ti";
import styled from "styled-components/macro";
import { A } from "../A";
import { P } from "../P";

const StyledA = styled(A)`
  height: 30px;
  width: 30px;
  ${({ theme: { media } }) => media.mobile`
    text-align: center;
    color: black;
    height: 60px;
    width: 60px;
  `}
`;

function IconAnchor({ Icon, url }) {
  if (!url) {
    return null;
  }

  return (
    <IconContext.Provider value={{ size: "100%" }}>
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
  ${({ theme: { media } }) => media.mobile`
   font-size: 30px
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Description = styled(P)``;
const Location = styled(P)``;
const DateTime = styled(P)``;

const Header = styled.header`
  display: flex;
  ${({ theme: { media } }) => media.mobile`
    flex-direction: column;
  `}
`;

const locationP = (location, address, currentShow) => {
  if (location || address) {
    if (currentShow) {
      return (
        <>
          <Location>{location}</Location>
          <Location>{address}</Location>
        </>
      );
    } else {
      return (
        <Location>
          {[location, address].filter((a) => !!a).join(" - ")}
        </Location>
      );
    }
  }
  return null;
};

export const Schedule = ({
  address,
  dates,
  time,
  description,
  location,
  name,
  purchaseUrl,
  website,
  currentShow,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>
        {name && <H3>{name}</H3>}
        {!currentShow && (
          <IconWrapper>
            <IconAnchor url={purchaseUrl} Icon={TiTicket} />
            <IconAnchor url={website} Icon={TiGlobeOutline} />
          </IconWrapper>
        )}
      </Header>
      {description && <Description>{description}</Description>}
      {locationP(location, address, currentShow)}
      {dates.map(({ days, month, time: dateTime, year, notes }, i) => {
        console.warn({ days, time, year, dateTime });
        const composedTime = time ? time : `${dateTime}, ${year}`;
        return (
          <DateTime key={i}>
            {monthName[month]} {days}, {composedTime} {notes}
          </DateTime>
        );
      })}
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
  currentShow: PropTypes.bool,
};
