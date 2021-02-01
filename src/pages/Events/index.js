import React, { useContext, Fragment } from "react";
import { Banner, Page, Schedule, H3 } from "../../styledGuide";
import Loading from "../Loading";
import {
  groupPerformancesByYear,
  olderYearsFirst,
  mostRecentYearsFirst,
} from "../../utils";
import { EVENTS } from "../../constants";
import { PerformancesContext, PagesContext } from "../../Providers";
import NoUpcomingEvents from "./NoUpcomingEvents";

// https://firebasestorage.googleapis.com/v0/b/sharp-dance.appspot.com/o/site%2Fmedia%2Fpuzzle%2F6.jpg?alt=media&token=e4ebd608-54c1-4aae-a0d3-5db4dd60511b

const renderPerformances = ([year, perfs]) =>
  perfs.length > 0 && (
    <Fragment key={year}>
      <H3>{year}</H3>
      {perfs.map((perf, i) => (
        <Schedule
          {...perf}
          key={`${year}-${perf.name}-${i}`}
          margin="0 0 L 0"
        />
      ))}
    </Fragment>
  );

export default function Events(props) {
  const { location } = props;
  const { pastPerformances, upcomingPerformances } = useContext(
    PerformancesContext
  );
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("events");

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;
  const isEventPage = location.pathname === EVENTS;

  const performanceArr = isEventPage
    ? Object.entries(groupPerformancesByYear(upcomingPerformances))
        .sort(olderYearsFirst)
        .map(renderPerformances)
    : Object.entries(groupPerformancesByYear(pastPerformances))
        .sort(mostRecentYearsFirst)
        .map(renderPerformances);

  return (
    <Page>
      <Banner {...headerBanner} />
      <div align="start">
        {isEventPage && performanceArr.length === 0 ? (
          <NoUpcomingEvents />
        ) : (
          performanceArr
        )}
      </div>
    </Page>
  );
}
