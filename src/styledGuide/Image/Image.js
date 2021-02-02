import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  min-height: 100px;
  min-width: 200px;
  overflow: hidden;
`;

const Img = styled.img``;

const Credit = styled.div`
  word-wrap: break-word;
  overflow: wrap;
  white-space: normal;
  font-size: 12px;
`;

export default function Image({ src, alt, credit, ...props }) {
  const role = alt ? undefined : "presentation";
  const srcString = typeof src === "string" ? src : src.src;
  const combinedAlt = alt || (src && src.title) ? src.title : undefined;
  return (
    <Wrapper {...props}>
      <Img src={srcString} alt={combinedAlt} role={role} />
      {credit && <Credit>{credit}</Credit>}
    </Wrapper>
  );
}
