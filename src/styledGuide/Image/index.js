import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.figure`
  min-height: 100px;
  min-width: 200px;
  overflow: hidden;
`;

const Img = styled.img`
  /* width: 100%; */
  ${({ size }) => `width: ${size}`}
`;

const Credit = styled.figcaption`
  word-wrap: break-word;
  overflow: wrap;
  white-space: normal;
  font-size: 12px;
`;

const getSrcString = (src) => {
  if (Array.isArray(src)) {
    return src.length ? src[0].src : "";
  } else if (typeof src === "object") {
    return src.src;
  } else {
    return src;
  }
};

export function Image({ src, alt, credit, imageSize, ...props }) {
  const role = alt ? undefined : "presentation";

  const srcString = getSrcString(src);
  const combinedAlt = alt || (src && src.title) ? src.title : undefined;

  if (!srcString) return null;
  return (
    <Wrapper {...props}>
      <Image.Img
        src={srcString}
        alt={combinedAlt}
        role={role}
        size={imageSize}
      />
      {credit && <Credit>Credit: {credit}</Credit>}
    </Wrapper>
  );
}

Image.Img = Img;
