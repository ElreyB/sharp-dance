import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components/macro";

const Credit = styled(({ children, ...props }) => (
  <div {...props}>Credit: {children}</div>
))`
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const Img = styled(({ src, alt, credit, ...props }) => {
  const role = alt ? undefined : "presentation";

  return (
    <Grid {...props}>
      <img src={src} alt={alt} role={role} />
      {credit && <Credit>{credit}</Credit>}
    </Grid>
  );
})`
  position: relative;
`;

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  credit: PropTypes.string
};
