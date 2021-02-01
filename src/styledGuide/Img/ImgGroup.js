import * as React from "react";
import PropTypes from "prop-types";
import { Img } from "./Img";
import { Credit } from "../internal/Credit";

const getArray = (maybeArray) => {
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
    <div>
      <div
        size={{
          desktop: "auto",
          mobile: 12,
        }}
        {...props}
      >
        {srcArr.map((src, i) => (
          <ImgGroup.Img
            src={src}
            size="fit"
            key={typeof src === "string" ? src : src.src}
            alt={altArr[i]}
            backgroundSize={backgroundSize}
          />
        ))}
      </div>
      <Credit
        size={{ desktop: "fit", mobile: 12 }}
        align={{ desktop: "end", mobile: "start" }}
      >
        {credit}
      </Credit>
    </div>
  );
};

ImgGroup.Img = Img;

ImgGroup.propTypes = {
  alt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  backgroundSize: PropTypes.oneOf(["cover", "contain"]),
  credit: PropTypes.string,
  src: PropTypes.oneOfType([
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
};
