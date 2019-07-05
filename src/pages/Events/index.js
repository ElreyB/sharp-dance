import React from "react";
import { Route } from "react-router-dom";
import { Grid, Banner, Page, Schedule, Nav, H3 } from "../../styledGuide";
import { groupPerformancesByYear, parseSchedule } from "../../utils";
import { EVENTS } from "../../constants";

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

export default function Events({ pages, performances }) {
  const parsedPerformances = Object.values(performances).map(parseSchedule);
  const upcomingPerformances = parsedPerformances
    .filter(({ isFuture }) => isFuture)
    .sort(olderFirst);
  const pastPerformances = parsedPerformances
    .filter(({ isFuture }) => !isFuture)
    .sort(mostRecentFirst);

  return (
    <Page>
      <Banner {...pages.events.headerBanner} />
      <Grid align="start">
        <Nav
          links={[
            { to: EVENTS, label: "Upcoming Performances" },
            { to: PAST_EVENTS, label: "Past Performances" }
          ]}
        />
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
