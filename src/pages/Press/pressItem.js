import React from "react";
import styled from "styled-components/macro";
import { Image } from "../../styledGuide";
import { A, P } from "../../styledGuide";

const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) => `${spacing.XL} 0`};
`;
const H3 = styled.h3`
  text-align: center;
`;

const Content = styled.div``;

const AuthorDate = styled(P)`
  text-align: right;
`;

const Logo = styled(Image)`
  text-align: center;
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
    <Wrapper>
      {!logo.src && makeIntoLink(<H3>{outlet}</H3>, url)}
      {makeIntoLink(<Logo src={logo.src} alt={logo.title} />, url)}
      <Content>
        {description && <P>{description}</P>}
        {(author || date) && (
          <AuthorDate>
            - {author} {date}
          </AuthorDate>
        )}
      </Content>
    </Wrapper>
  );
}
