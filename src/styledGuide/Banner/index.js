import * as React from "react";
import { useGrid } from "gymnast";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { H1, H2 } from "../Headings";
import { Img } from "../Img";

export const Banner = ({
  title,
  subtitle,
  imageSrc,
  alt,
  imageCredit,
  justify = "center",
  ...props
}) => {
  const [showH1, allProps] = useGrid(props);

  if (showH1) {
    return (
      <Header {...allProps}>
        {title && <H1 justify={justify}>{title}</H1>}
        {imageSrc && (
          <Img
            justify={justify}
            src={imageSrc}
            alt={alt}
            credit={imageCredit}
          />
        )}
        {subtitle && <H2 justify={justify}>{subtitle}</H2>}
      </Header>
    );
  }

  return null;
};

Banner.propTypes = {
  alt: PropTypes.string,
  imageCredit: PropTypes.string,
  imageSrc: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};