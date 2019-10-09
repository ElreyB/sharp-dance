import React, { useContext } from "react";
import { Route, Link } from "react-router-dom";
import { Grid, Banner, Page, Schedule, H3 } from "../../styledGuide";
import Loading from "../Loading";
import { groupPerformancesByYear, parseSchedule } from "../../utils";
import { EVENTS } from "../../constants";
import { PerformancesContext, PagesContext } from "../../Providers";

const PAST_EVENTS = `${EVENTS}/past`;

function mostRecentFirst(a, b) {
  return b.dateTime - a.dateTime;
}

function olderFirst(a, b) {
  return a.dateTime - b.dateTime;
}

function mostRecentYearsFirst([a], [b]) {
  return b - a;
}

function olderYearsFirst([a], [b]) {
  return a - b;
}

const renderPerformances = ([year, perfs]) =>
  perfs.length > 0 && (
    <React.Fragment key={year}>
      <H3>{year}</H3>
      {perfs.map((perf, i) => (
        <Schedule
          {...perf}
          key={`${year}-${perf.name}-${i}`}
          margin="0 0 L 0"
        />
      ))}
    </React.Fragment>
  );

export default function Events(props) {
  const { location } = props;
  const { performances } = useContext(PerformancesContext);
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("events");

  const parsedPerformances = performances && performances.map(parseSchedule);
  const upcomingPerformances =
    performances &&
    parsedPerformances.filter(({ isFuture }) => isFuture).sort(olderFirst);
  const pastPerformances = parsedPerformances
    .filter(({ isFuture }) => !isFuture)
    .sort(mostRecentFirst);

  if (!page) {
    return <Loading />;
  }

  const { options, pageName, ...headerBanner } = page;
  const isEventPage = location.pathname === "/events";

  return (
    <Page>
      <Banner {...headerBanner} />
      <Grid justify="center">
        <Link to={isEventPage ? PAST_EVENTS : EVENTS}>
          {isEventPage ? "Past perfomances" : "Upcoming Performances"}
        </Link>
      </Grid>
      <Grid align="start">
        <Route
          path={EVENTS}
          exact
          component={() => (
            <>
              {Object.entries(groupPerformancesByYear(upcomingPerformances))
                .sort(olderYearsFirst)
                .map(renderPerformances)}
            </>
          )}
        />
        <Route
          path={PAST_EVENTS}
          component={() => (
            <>
              {Object.entries(groupPerformancesByYear(pastPerformances))
                .sort(mostRecentYearsFirst)
                .map(renderPerformances)}
            </>
          )}
        />
      </Grid>
    </Page>
  );
}
