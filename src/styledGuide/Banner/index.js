import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
// import { H2 } from "../Headings";
import { ImgGroup } from "../Img";

const StyledImgGroup = styled(ImgGroup)`
  min-height: 400px;

  ${ImgGroup.Img.ImgWrapper} {
    max-width: 100%;
  }
`;

const H1 = styled.h1`
  text-align: center;
`;
const H2 = styled.h2`
  text-align: center;
`;

const Header = styled.header``;

export const Banner = ({
  title,
  subtitle,
  images,
  image,
  alt,
  imgCredit,
  justify = "center",
  inputCount,
  ...props
}) => {
  const imgSrc = images || image;
  return (
    <Header {...props}>
      <H1>{title}</H1>
      <StyledImgGroup
        src={imgSrc}
        alt={alt}
        credit={imgCredit}
        justify={justify}
        backgroundSize="contain"
      />
      {subtitle && <H2>{subtitle}</H2>}
    </Header>
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
