import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.figure`
  min-height: 100px;
  min-width: 200px;
  overflow: hidden;
`;

const Img = styled.img``;

const Credit = styled.figcaption`
  word-wrap: break-word;
  overflow: wrap;
  white-space: normal;
  font-size: 12px;
`;

const getSrcString = (src) => {
  if (Array.isArray(src)) {
    return src[0].src;
  } else if (typeof src === "object") {
    return src.src;
  } else {
    return src;
  }
};

export default function Image({ src, alt, credit, ...props }) {
  const role = alt ? undefined : "presentation";
  const srcString = getSrcString(src);
  const combinedAlt = alt || (src && src.title) ? src.title : undefined;
  return (
    <Wrapper {...props}>
      <Img src={srcString} alt={combinedAlt} role={role} />
      {credit && <Credit>Credit: {credit}</Credit>}
    </Wrapper>
  );
}
