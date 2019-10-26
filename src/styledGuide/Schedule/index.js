import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components";
import { TiTicket, TiGlobeOutline } from "react-icons/ti";
import { P } from "../P";
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
  12: "December"
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
  website
}) => {
  return (
    <Grid size={size} margin={margin} padding={padding}>
      <Grid>
        {name && <StyledH3 size="fit">{name}</StyledH3>}
        <IconAnchor url={purchaseUrl} Icon={TiTicket} />
        <IconAnchor url={website} Icon={TiGlobeOutline} />
      </Grid>
      {description && <P>{description}</P>}
      <Grid size={{ mobile: "auto", desktop: "fit" }}>
        {(location || address) && (
          <P>{[location, address].filter(a => !!a).join(" - ")}</P>
        )}
      </Grid>
      <Grid>
        {dates.map(({ days, month, time, notes }, i) => (
          <Grid key={i}>
            <Grid size="fit" paddingRight="S">
              {monthName[month]}, {days}
            </Grid>
            <Grid size="fit" paddingRight="S">
              {time}
            </Grid>
            <Grid size="fit">{notes}</Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
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
      notes: PropTypes.string
    })
  ),
  description: PropTypes.string,
  footnote: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  pricing: PropTypes.string,
  purchaseUrl: PropTypes.string,
  website: PropTypes.string
};
