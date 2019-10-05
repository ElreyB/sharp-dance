import styled from "styled-components/macro";

import { withGrid } from "../internal";

function wrapper(Component) {
  return styled(withGrid(Component))`
    margin: 0;
  `;
}

export const H1 = wrapper("h1");
export const H2 = wrapper("h2");
export const H3 = wrapper("h3");
export const H4 = wrapper("h4");
