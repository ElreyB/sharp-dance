import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
// import { H2 } from "../Headings";
// import { ImgGroup } from "../Img";
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
  console.log("banner", {
    title,
    subtitle,
    images,
    image,
    alt,
    imgCredit,
    inputCount,
  });
  return (
    <BannerHeader {...props}>
      <H1>{title}</H1>
      <StyledImage src={imgSrc} alt={alt} credit={imgCredit} />
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
