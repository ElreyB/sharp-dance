import { css } from "styled-components/macro";

const colors = {
  black: "#000000",
  white: "#ffffff",
  red: "#d0021b",
  blue: "#00fdff",
};

const spacing = {
  XS: "4px",
  S: "8px",
  M: "16px",
  L: "24px",
  XL: "32px",
};

const fonts = {
  sansSerif: `'Montserrat', sans-serif`,
  serif: `'Libre Baskerville', serif`,
};

const device = {
  desktop: "(min-width: 992px)",
  mobile: "(max-width: 991px)",
};

export const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
};

export const media = Object.keys(device).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media ${device[label]} {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const theme = {
  colors,
  fonts,
  spacing,
  device,
  media,
};
