function sortPerformance(perfA, perfB) {
  return perfA.dateTime - perfB.dateTime;
}

/**
 * Ensures dates are set and adds information on whether the
 * date is in the future (isFuture), if a date was provided (hasDate)
 * and a parsed time representation of the first date (dateTime)
 */
export function parsePerformance(performance) {
  const now = new Date().getTime();
  const copy = JSON.parse(JSON.stringify(performance));
  let hasDate = false;
  let dates = [{ year: 0, month: 0, days: "0" }];

  if (copy.dates && copy.dates.length > 0) {
    dates = copy.dates;
    hasDate = true;
  }

  const parsedDate = {
    day: parseInt((dates[0].days.match(/([0-9]+)/) || [])[1], 10) || 0,
    month: dates[0].month,
    year: dates[0].year
  };
  const dateTime = hasDate
    ? new Date(
        `${parsedDate.month || 1}/${parsedDate.day || 1}/${parsedDate.year}`
      ).getTime()
    : 0;

  const isFuture = hasDate && dateTime > now;

  return {
    ...copy,
    dates,
    dateTime,
    isFuture,
    hasDate
  };
}

/**
 * Turns an array of performances into an object grouped by year.
 *
 * Sorts dates within each year from earlier to later
 */
export function groupPerformancesByYear(performances = []) {
  return performances.reduce(
    (acc, performance) => ({
      ...acc,
      [performance.dates[0].year]: [
        ...(acc[performance.dates[0].year] || []),
        performance
      ].sort(sortPerformance)
    }),
    {}
  );
}
