import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components/macro";
import { Credit } from "../internal/Credit";

const ImgWrapper = styled(Grid)`
  position: relative;
`;

const ImgGrid = styled(Grid)`
  background-repeat: no-repeat;
  background-position: center;
`;

const InnerImg = styled("img")`
  max-width: 100%;
  max-height: 100%;
  opacity: 0;
`;

export const Img = ({
  src,
  alt,
  credit,
  backgroundSize = "cover",
  ...props
}) => {
  const role = alt ? undefined : "presentation";

  return (
    <ImgWrapper margin="0 M/2" {...props}>
      <ImgGrid
        align="center"
        justify="center"
        style={{ backgroundImage: `url("${src}")`, backgroundSize }}
      >
        <InnerImg src={src} alt={alt} role={role} />
      </ImgGrid>
      <Credit>{credit}</Credit>
    </ImgWrapper>
  );
};

Img.propTypes = {
  alt: PropTypes.string,
  backgroundSize: PropTypes.oneOf(["cover", "contain"]),
  credit: PropTypes.string,
  src: PropTypes.string
};
