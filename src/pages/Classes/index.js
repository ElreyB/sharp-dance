import React from "react";
import { Banner, Page, Schedule, H3, IFrame } from "../../styledGuide";
import { parseDate } from "../../utils";
import Loading from "../Loading";
import { PagesContext, ClassScheduleContext } from "../../Providers";

const now = new Date().getTime();
const isFuture = time => time > now;
const googleMapsEmbedAPIKey = "AIzaSyD5q1ok9ku6lmBoqP-qG5A6WxMgdW6bWyM";

function ClassSchedule({ address = "", season, ...upcomingClasses }) {
  const queryAddress = address.replace(/\s/g, "+");

  return (
    <>
      {season && <H3>{season}</H3>}
      <Schedule {...upcomingClasses} margin="0 0 L 0" />
      {queryAddress && (
        <>
          <H3>Location </H3>
          <IFrame
            src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsEmbedAPIKey}&q=${queryAddress}`}
            title="Class locations"
            height="500"
          ></IFrame>
        </>
      )}
    </>
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
  /**TODO: logic should go my the month and day not year */
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
