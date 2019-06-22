import * as React from "react";
import { useGrid } from "gymnast";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Header } from "./Header";
import { H1, H2 } from "../Headings";
import { ImgGroup } from "../Img";

const StyledImgGroup = styled(ImgGroup)`
  min-height: 400px;
`;

export const Banner = ({
  title,
  subtitle,
  imgSrc,
  alt,
  imgCredit,
  justify = "center",
  ...props
}) => {
  const [showH1, allProps] = useGrid(props);

  if (showH1) {
    return (
      <Header {...allProps}>
        {title && <H1 justify={justify}>{title}</H1>}
        <StyledImgGroup
          src={imgSrc}
          alt={alt}
          credit={imgCredit}
          justify={justify}
          backgroundSize="cover"
        />
        {subtitle && <H2 justify={justify}>{subtitle}</H2>}
      </Header>
    );
  }

  return null;
};

Banner.propTypes = {
  imgCredit: PropTypes.string,
  alt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  imgSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  subtitle: PropTypes.string,
  title: PropTypes.string
};
