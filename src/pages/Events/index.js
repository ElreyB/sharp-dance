import React, { useContext, Fragment } from "react";
import { Grid, Banner, Page, Schedule, H3 } from "../../styledGuide";
import Loading from "../Loading";
import {
  groupPerformancesByYear,
  olderYearsFirst,
  mostRecentYearsFirst,
} from "../../utils";
import { EVENTS } from "../../constants";
import { PerformancesContext, PagesContext } from "../../Providers";

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

  return (
    <Page>
      <Banner {...headerBanner} />
      <Grid align="start">
        {isEventPage
          ? Object.entries(groupPerformancesByYear(upcomingPerformances))
              .sort(olderYearsFirst)
              .map(renderPerformances)
          : Object.entries(groupPerformancesByYear(pastPerformances))
              .sort(mostRecentYearsFirst)
              .map(renderPerformances)}
      </Grid>
    </Page>
  );
}
