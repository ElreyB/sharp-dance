import React from "react";
import styled from "styled-components/macro";
import { Schedule, H3, IFrame } from "../../styledGuide";
import { parseDate } from "../../utils";
import Loading from "../Loading";
import { PagesContext, ClassScheduleContext } from "../../Providers";
import Page from "../../layouts/Page";

const now = new Date().getTime();
const isFuture = (time) => time > now;
const googleMapsEmbedAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

function ClassSchedule({ season, ...upcomingClasses }) {
  return (
    <div>
      {season && <H3>{season}</H3>}
      <Schedule {...upcomingClasses} />
    </div>
  );
}

const StyledIFrame = styled(IFrame)`
  margin: ${({ theme: { spacing } }) => `${spacing.M} 0`};
`;

export default function Classes() {
  const { getPage } = React.useContext(PagesContext);
  const classSchedules = React.useContext(ClassScheduleContext);
  const page = getPage("classes");

  if (!page) {
    return <Loading />;
  }
  console.log({ classSchedules });

  const { options = {}, pageName, ...headerBanner } = page;
  const location = classSchedules.length && classSchedules[0].placeId;
  const upcomingClassesList = classSchedules
    .map((classSchedule) => {
      const dates = classSchedule.dates.filter((date) =>
        isFuture(parseDate(date))
      );

      return dates.length === 0 ? undefined : { ...classSchedule, dates };
    })
    .filter((classSchedule) => !!classSchedule);

  return (
    <Page headerBanner={headerBanner}>
      {options.content}
      {location && (
        <StyledIFrame
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location}&key=${googleMapsEmbedAPIKey}`}
          // <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc0iiUg7GxokRGIlW7bU0DKo&key=AIzaSyAbL6Zcu80QrsNEEtx_AkpejRW2fhJ9T_I"></iframe>
          title="Class locations"
          height="500"
          loading="lazy"
          allowFullScreen
        ></StyledIFrame>
      )}
      {upcomingClassesList.length > 0 ? (
        <>
          {upcomingClassesList.map((schedule, i) => (
            <ClassSchedule {...schedule} key={i} />
          ))}
        </>
      ) : (
        <H3>{options.noClasses}</H3>
      )}
    </Page>
  );
}
