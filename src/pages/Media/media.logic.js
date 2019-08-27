import { MEDIA } from "../../constants";

function standardize(str = "") {
  return str.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");
}

export function isMatch(a, b) {
  return standardize(a) === standardize(b);
}

export function getPerformanceURL({ title }) {
  return `${MEDIA}/${standardize(title)}`;
}
