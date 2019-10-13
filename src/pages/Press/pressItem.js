import React from "react";
import styled from "styled-components";
import { Grid, Img, H3, P, A } from "../../styledGuide";

const Wrapper = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export function PressItem({
  author,
  date,
  description,
  image,
  logo,
  outlet,
  url
}) {
  const content = (
    <Wrapper padding="XL 0" align="start">
      {!logo.src && <H3 justify="center">{outlet}</H3>}
      <Img backgroundSize="contain" src={logo.src} alt={logo.title} />
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

  if (url) {
    return <A href={url}>{content}</A>;
  }

  return content;
}
