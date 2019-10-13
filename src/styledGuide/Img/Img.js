import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled, { css } from "styled-components/macro";
import { Credit } from "../internal/Credit";

const ImgWrapper = styled(Grid)`
  position: relative;
  ${({ media }) =>
    media &&
    css`
      height: 300px;
    `}
`;

const ImgGrid = styled(Grid)`
  background-repeat: no-repeat;
  background-position: center;
  ${({ media }) =>
    media &&
    css`
      height: 100%;
    `}
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
  media = false,
  ...props
}) => {
  const role = alt ? undefined : "presentation";
  const srcString = typeof src === "string" ? src : src.src;
  const combinedAlt = alt || (src && src.title) ? src.title : undefined;

  return (
    <ImgWrapper margin="0 M/2" media={media} {...props}>
      <ImgGrid
        align="center"
        justify="center"
        style={{ backgroundImage: `url("${srcString}")`, backgroundSize }}
        media={media}
      >
        <InnerImg src={srcString} alt={combinedAlt} role={role} />
      </ImgGrid>
      <Credit>{credit}</Credit>
    </ImgWrapper>
  );
};

Img.propTypes = {
  alt: PropTypes.string,
  backgroundSize: PropTypes.oneOf(["cover", "contain"]),
  credit: PropTypes.string,
  media: PropTypes.bool,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string
    })
  ])
};
