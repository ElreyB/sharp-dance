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

  const { options = {}, pageName, ...headerBanner } = page;
  const location = classSchedules.location || "Equilbrium";
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
      <StyledIFrame
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsEmbedAPIKey}&q=${location}`}
        title="Class locations"
        height="500"
      ></StyledIFrame>
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
