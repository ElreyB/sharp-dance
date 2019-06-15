import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components/macro";

const StyledCredit = styled("div")`
  right: 0;
  bottom: 0;
  position: absolute;
`;
const StyledImg = styled(Grid)`
  position: relative;
`;

const Credit = ({ children, ...props }) => (
  <StyledCredit {...props}>Credit: {children}</StyledCredit>
);

export const Img = ({ src, alt, credit, ...props }) => {
  const role = alt ? undefined : "presentation";

  return (
    <StyledImg {...props}>
      <img src={src} alt={alt} role={role} />
      {credit && <Credit>{credit}</Credit>}
    </StyledImg>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  credit: PropTypes.string
};
