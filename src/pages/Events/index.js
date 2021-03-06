import React, { useContext, Fragment } from "react";
import styled from "styled-components/macro";
import { Schedule } from "../../styledGuide";
import Loading from "../Loading";
import {
  groupPerformancesByYear,
  olderYearsFirst,
  mostRecentYearsFirst,
} from "../../utils";
import { EVENTS } from "../../constants";
import { PerformancesContext, PagesContext } from "../../Providers";
import NoUpcomingEvents from "./NoUpcomingEvents";
import Page from "../../layouts/Page";

const Wrapper = styled.div``;

const H3 = styled.h3`
  text-align: center;
`;

const StyledSchedule = styled(Schedule)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.L};
`;

const renderPerformances = ([year, perfs]) =>
  perfs.length > 0 && (
    <Fragment key={year}>
      <H3>{year}</H3>
      {perfs.map((perf, i) => (
        <StyledSchedule {...perf} key={`${year}-${perf.name}-${i}`} />
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
    <Page headerBanner={headerBanner}>
      <Wrapper>
        {isEventPage && performanceArr.length === 0 ? (
          <NoUpcomingEvents />
        ) : (
          performanceArr
        )}
      </Wrapper>
    </Page>
  );
}
