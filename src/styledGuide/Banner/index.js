import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Image } from "../Image";

const StyledImage = styled(Image)`
  max-width: 100%;
  min-height: 400px;
  text-align: center;
  ${Image.Img} {
    min-width: 300px;
    ${({ theme: { media } }) => media.mobile`
      min-width: 100px;
      max-width: 100%;
    `};
  } ;
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
