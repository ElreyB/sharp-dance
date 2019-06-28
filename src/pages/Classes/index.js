import React from "react";
import { Banner, Page, Schedule, H3, IFrame } from "../../styledGuide";
import data from "../../data.json";
import { parseDate } from "../../utils";

const now = new Date().getTime();
const isFuture = time => time > now;

export default function Classes() {
  const { pages, classSchedule } = data;

  const upcomingClasses = {
    ...classSchedule,
    dates: classSchedule.dates.filter(date => isFuture(parseDate(date)))
  };

  const classes = (
    <>
      <Schedule {...upcomingClasses} margin="0 0 L 0" />
      <H3>Location </H3>
      <IFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.602630698705!2d-75.17140168427034!3d39.927907979424894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c60e52a24873%3A0xaa0c34b5ed568918!2sEquilibrium+Dance+Academy%2C+LLC!5e0!3m2!1sen!2sus!4v1561598865092!5m2!1sen!2sus"
        title="Class locations"
        height="500"
      ></IFrame>
    </>
  );
  const noClasses = <H3>{pages.classes.noClasses}</H3>;

  return (
    <Page>
      <Banner {...pages.classes.headerBanner} />
      {upcomingClasses.dates.length > 0 ? classes : noClasses}
    </Page>
  );
}
