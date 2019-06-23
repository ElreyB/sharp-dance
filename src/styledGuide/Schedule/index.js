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
  name,
  description,
  location,
  footnote,
  website,
  pricing,
  purchaseUrl,
  dates,
  size,
  margin,
  padding
}) => {
  return (
    <Grid size={size} margin={margin} padding={padding}>
      <Grid>
        {name && <StyledH3 size="fit">{name}</StyledH3>}
        <IconAnchor url={purchaseUrl} Icon={TiTicket} />
        <IconAnchor url={website} Icon={TiGlobeOutline} />
      </Grid>
      {description && <P>{description}</P>}
      <Grid>
        <table>
          <tbody>
            {dates.map(({ days, month, time, notes }, i) => {
              return (
                <tr key={i}>
                  <td>
                    {monthName[month]}, {days}
                  </td>
                  <td>{time}</td>
                  <td>{notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Grid>
      {location && (
        <P>{[location.name, location.address].filter(a => !!a).join(" - ")}</P>
      )}
      {pricing && <P>{pricing}</P>}
      {footnote && <P>{footnote}</P>}
    </Grid>
  );
};

Schedule.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string
  }),
  footnote: PropTypes.string,
  website: PropTypes.string,
  pricing: PropTypes.string,
  purchaseUrl: PropTypes.string,
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      days: PropTypes.string,
      month: PropTypes.number,
      year: PropTypes.number,
      time: PropTypes.string,
      notes: PropTypes.string
    })
  )
};