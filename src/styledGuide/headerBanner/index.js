import * as React from "react";
import { useGrid } from "gymnast";
import PropTypes from "prop-types";
import { Header } from "./header";
import { H1, H2 } from "../headings";
import { Img } from "../img";

export const HeaderBanner = ({ title, subtitle, src, alt, ...props }) => {
  const [showH1, allProps] = useGrid(props);

  if (showH1) {
    return (
      <Header {...allProps}>
        {title && <H1>{title}</H1>}
        {src && <Img src={src} alt={alt} />}
        {subtitle && <H2>{subtitle}</H2>}
      </Header>
    );
  }

  return null;
};

HeaderBanner.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};
