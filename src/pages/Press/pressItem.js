import React from "react";
import styled from "styled-components/macro";
import { Grid, Img, H3 } from "../../styledGuide";
import { A } from "../../styledGuide/A/A";
import { P } from "../../styledGuide/P/P";

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
        {description && <P>{description}</P>}
        {(author || date) && (
          <Grid justify="end" size="fit">
            {author} {date}
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
}
