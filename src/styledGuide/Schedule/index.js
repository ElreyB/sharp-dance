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
const Footnote = styled(P)`
  font-style: italic;
`;
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

const TicIcon = styled.div`
  display: inline-flex;
`;

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
  footnote,
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
      {footnote && <Footnote>{footnote}</Footnote>}
      {dates.map(({ days, month, time: dateTime, year, notes }, i) => {
        const composedTime = notes?.includes("summer intensive")
          ? "9:30am-4pm"
          : dateTime;
        const composedNotes = notes?.includes("Cabaret Party") ? (
          <TicIcon>
            <p>9:30-11pm Cabaret Party</p>
            <IconAnchor
              url="https://sharp-dance-company.ticketleap.com/saturday-night-post-show-cabaret-party/"
              Icon={TiTicket}
            />
          </TicIcon>
        ) : (
          notes
        );
        return (
          <DateTime key={i}>
            {monthName[month]} {days}, {year} {composedTime || time}{" "}
            {composedNotes}
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
