import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Header } from "./Header";
import { H1, H2 } from "../Headings";
import { ImgGroup } from "../Img";

const StyledImgGroup = styled(ImgGroup)`
  min-height: 400px;

  ${ImgGroup.Img.ImgWrapper} {
    max-width: 100%;
  }
`;

export const Banner = ({
  title,
  subTitle,
  subtitle = subTitle,
  images,
  image,
  alt,
  imgCredit,
  justify = "center",
  ...props
}) => {
  const imgSrc = images || image;

  return (
    <Header {...props}>
      <H1 justify={justify}>{title}</H1>
      <StyledImgGroup
        src={imgSrc}
        alt={alt}
        credit={imgCredit}
        justify={justify}
        backgroundSize="contain"
      />
      {subtitle && <H2 justify={justify}>{subtitle}</H2>}
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
  subTitle: PropTypes.string,
  title: PropTypes.string,
};
