import * as React from "react";
import PropTypes from "prop-types";
import { useGrid } from "gymnast";

export const Img = ({ src, alt, ...props }) => {
  const [showImg, allProps] = useGrid(props);

  if (showImg) {
    const role = alt ? undefined : "presentation";

    return <img {...allProps} src={src} alt={alt} role={role} />;
  }

  return null;
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
