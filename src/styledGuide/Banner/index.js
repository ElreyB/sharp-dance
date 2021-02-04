import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Image from "../Image";

const StyledImage = styled(Image)`
  min-height: 400px;
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
`;
const H2 = styled.h2`
  text-align: center;
`;

const BannerHeader = styled.header``;

const getSrcString = (src) => {
  if (Array.isArray(src)) {
    return src.length ? src[0].src : "";
  } else if (typeof src === "object") {
    return src.src;
  } else {
    return src;
  }
};

export const Banner = ({
  title,
  subtitle,
  images,
  image,
  alt,
  imgCredit,
  inputCount,
  ...props
}) => {
  const imgSrc = images || image;

  const srcString = getSrcString(imgSrc);
  const combinedAlt =
    alt || (imgSrc && imgSrc.title) ? imgSrc.title : undefined;
  return (
    <BannerHeader {...props}>
      <H1>{title}</H1>
      {srcString && (
        <StyledImage src={srcString} alt={combinedAlt} credit={imgCredit} />
      )}
      {subtitle && <H2>{subtitle}</H2>}
    </BannerHeader>
  );
};

Banner.propTypes = {
  imgCredit: PropTypes.string,
  alt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  imgSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  ]),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
