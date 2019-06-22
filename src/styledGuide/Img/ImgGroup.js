import * as React from "react";
import { Grid } from "gymnast";
import PropTypes from "prop-types";
import { Img } from "./Img";
import { Credit } from "../internal/Credit";

const getArray = maybeArray => {
  if (!maybeArray) {
    return [];
  }
  if (Array.isArray(maybeArray)) {
    return maybeArray;
  }
  return [maybeArray];
};

export const ImgGroup = ({ src, alt, credit, backgroundSize, ...props }) => {
  const srcArr = getArray(src);
  const altArr = getArray(alt);

  if (srcArr.length === 0) {
    return null;
  }

  return (
    <Grid>
      <Grid size="auto" {...props}>
        {srcArr.map((src, i) => (
          <Img
            src={src}
            size="fit"
            key={src}
            alt={altArr[i]}
            backgroundSize={backgroundSize}
          />
        ))}
      </Grid>
      <Credit size="fit" align="end">
        {credit}
      </Credit>
    </Grid>
  );
};

ImgGroup.propTypes = {
  alt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  backgroundSize: PropTypes.oneOf(["cover", "contain"]),
  credit: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};
