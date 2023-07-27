function sortPerformance(perfA, perfB) {
  return perfA.dateTime - perfB.dateTime;
}

export function parseDate(date) {
  const parsedDate = {
    day: parseInt((date.days.match(/([0-9]+)/) || [])?.[1], 10) || 0,
    month: date.month || 0,
    year: date.year,
  };
  const hasDate = date.year || date.month;

  return hasDate
    ? new Date(
        `${parsedDate.month || 1}/${parsedDate.day || 1}/${parsedDate.year}`
      ).getTime()
    : 0;
}

/**
 * Ensures dates are set and adds information on whether the
 * date is in the future (isFuture), if a date was provided (hasDate)
 * and a parsed time representation of the first date (dateTime)
 */
export function parseSchedule(performance) {
  const now = new Date(
    parseDate({
      month: new Date().getMonth() + 1,
      days: `${new Date().getDate()}`,
      year: new Date().getFullYear(),
    })
  );
  const copy = JSON.parse(JSON.stringify(performance));
  let hasDate = false;
  let dates = [{ year: 0, month: 0, days: "0" }];

  if (copy.dates && copy.dates.length > 0) {
    dates = copy.dates;
    hasDate = true;
  }
  const dateTime = parseDate(copy.dates[copy.dates.length - 1]);
  const isFuture = hasDate && dateTime > now;

  if (isFuture) {
    console.log("BUG AREA", dateTime, now.toUTCString(), copy.name, copy);
  }

  return {
    ...copy,
    dates,
    dateTime,
    isFuture,
    hasDate,
  };
}

/**
 * Turns an array of performances into an object grouped by year.
 *
 * Sorts dates within each year from earlier to later
 */
export function groupPerformancesByYear(performances = []) {
  return performances.reduce((acc, performance) => {
    const { year } = performance.dates[0] || {};

    if (!year) {
      return acc;
    }

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(performance);
    acc[year].sort(sortPerformance);

    return acc;
  }, {});
}

export function mostRecentFirst(a, b) {
  return b.dateTime - a.dateTime;
}

export function olderFirst(a, b) {
  return a.dateTime - b.dateTime;
}

export function mostRecentYearsFirst([a], [b]) {
  return b - a;
}

export function olderYearsFirst([a], [b]) {
  return a - b;
}
