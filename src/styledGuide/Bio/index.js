import React from "react";
import styled from "styled-components/macro";
import { Image } from "../Image";
import { Markdown } from "../Markdown";

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.L};
`;

const Content = styled.div`
  display: flex;
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
  `};
`;

const StyledImage = styled(Image)`
  text-align: center;
  ${({ theme: { media } }) => media.mobile`
    width: 50%;
    align-self: center;
  `};
`;

const H3 = styled.h3`
  ${({ theme }) => theme.media.mobile`
      text-align: center;
  `};
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

const Title = styled.span`
  font-style: italic;
`;

const StyledMarkdown = styled(Markdown)`
  margin: 16px 40px;
`;

export function Bio({
  name,
  role,
  imgCredit,
  bio,
  image,
  images,
  title,
  ...props
}) {
  const imgSrc = images || image;

  return (
    <Wrapper>
      <H3>
        <Name>{name} </Name>
        <Title>({title})</Title>
      </H3>
      <Content>
        <StyledImage
          src={imgSrc}
          alt={`${name} headshot`}
          credit={imgCredit}
          imageSize="100%"
        ></StyledImage>
        <StyledMarkdown>{bio}</StyledMarkdown>
      </Content>
    </Wrapper>
  );
}
