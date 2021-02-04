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

export default function Image({ src, alt, credit, ...props }) {
  const role = alt ? undefined : "presentation";

  return (
    <Wrapper {...props}>
      <Img src={src} alt={alt} role={role} />
      {credit && <Credit>Credit: {credit}</Credit>}
    </Wrapper>
  );
}
