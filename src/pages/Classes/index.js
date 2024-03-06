import React from "react";
import styled from "styled-components/macro";
import { Schedule, H3, A } from "../../styledGuide";
import { FaInstagram } from "react-icons/fa";
// import { parseDate } from "../../utils";
import Loading from "../Loading";
import { PagesContext, ClassScheduleContext } from "../../Providers";
import Page from "../../layouts/Page";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const IconLink = styled(A)`
  width: 33.33%;
  padding: 0 4px;
  text-align: center;
`;

const now = new Date().getTime();
const isFuture = (time) => {
  return time > now;
};
// const googleMapsEmbedAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

function ClassSchedule({ season, ...upcomingClasses }) {
  return (
    <div>
      {season && <H3>{season}</H3>}
      <Schedule {...upcomingClasses} />
    </div>
  );
}

const StyledImage = styled.img`
  margin: ${({ theme: { spacing } }) => `${spacing.M} 0`};
  width: 100%;
  height: 500px;
`;

export default function Classes() {
  const { getPage } = React.useContext(PagesContext);
  const classSchedules = React.useContext(ClassScheduleContext);
  const page = getPage("classes");

  if (!page) {
    return <Loading />;
  }

  const { options = {}, pageName, ...headerBanner } = page;
  // const location = classSchedules.length && classSchedules[0].location;
  const upcomingClassesList = classSchedules
    .map((classSchedule) => {
      const dates = classSchedule.dates.filter((date) => {
        const dateTime = new Date(date.days).getTime();
        return isFuture(dateTime);
      });

      return dates.length === 0 ? undefined : { ...classSchedule, dates };
    })
    .filter((classSchedule) => !!classSchedule);

  return (
    <Page headerBanner={headerBanner}>
      {options.content}
      <IconLink href="https://www.instagram.com/sharpdancephilly/">
        <FaInstagram size={40} />
      </IconLink>
      {/* <A href="https://www.google.com/maps/place/Equilibrium+Dance+Academy,+LLC/@39.9279158,-75.1714042,17z/data=!4m5!3m4!1s0x89c6c60e52a24873:0xaa0c34b5ed568918!8m2!3d39.9279156!4d-75.1692154">
        <StyledImage
          src={process.env.PUBLIC_URL + "/images/sharp-google-maps.png"}
          width="200px"
          height="500px"
          alt="sharp dance"
        />
      </A>
      {upcomingClassesList.length > 0 ? (
        <>
          {upcomingClassesList.map((schedule, i) => {
            return <ClassSchedule {...schedule} key={i} />;
          })}
        </>
      ) : (
        <H3>{options.noClasses}</H3>
      )} */}
    </Page>
  );
}
