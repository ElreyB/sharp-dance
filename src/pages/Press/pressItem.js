import React from "react";
import styled from "styled-components";
import { Grid, Img, H3, P } from "../../styledGuide";
import { A } from "../../styledGuide/A/A";

const Wrapper = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;
const makeIntoLink = (content, url) => {
  if (url) {
    return <A href={url}>{content}</A>;
  }
  return content;
};

export function PressItem({
  author,
  date,
  description,
  image,
  logo,
  outlet,
  url,
}) {
  return (
    <Wrapper padding="XL 0" align="start">
      {!logo.src && makeIntoLink(<H3 justify="center">{outlet}</H3>, url)}
      {makeIntoLink(
        <Img backgroundSize="contain" src={logo.src} alt={logo.title} />,
        url
      )}
      <Grid size="auto" align="start">
        {description && <P size={12}>{description}</P>}
        {(author || date) && (
          <Grid justify="end" size="fit">
            {author} {date}
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
}
