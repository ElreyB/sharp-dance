import React from "react";
import { Banner, Grid, Page, Schedule, H3, IFrame } from "../../styledGuide";
import { parseDate } from "../../utils";
import Loading from "../Loading";
import { PagesContext, ClassScheduleContext } from "../../Providers";
import config from "../../fbconfig/apiKeys.json";

const now = new Date().getTime();
const isFuture = time => time > now;
const googleMapsEmbedAPIKey = `${config.googleApiKey}`;

function ClassSchedule({ season, ...upcomingClasses }) {
  return (
    <Grid>
      {season && <H3>{season}</H3>}
      <Schedule {...upcomingClasses} margin="0 0 L 0" />
    </Grid>
  );
}

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
    .map(classSchedule => {
      const dates = classSchedule.dates.filter(date =>
        isFuture(parseDate(date))
      );

      return dates.length === 0 ? undefined : { ...classSchedule, dates };
    })
    .filter(classSchedule => !!classSchedule);

  return (
    <Page>
      <Banner {...headerBanner} />
      {options.content}
      <IFrame
        margin="M 0"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsEmbedAPIKey}&q=${location}`}
        title="Class locations"
        height="500"
      ></IFrame>
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
