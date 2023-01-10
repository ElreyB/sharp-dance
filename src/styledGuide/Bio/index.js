import React from "react";
import styled from "styled-components/macro";
import { Image } from "../Image";
import { Markdown } from "../Markdown";

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.L};
  border: 5px solid black;
  padding: 48px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
  `};
`;

const StyledImage = styled(Image)`
  text-align: center;

  ${({ theme: { media } }) => media.mobile`
    align-self: center;
  `};
`;

const H3 = styled.h3`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 5px;
`;

const Title = styled.span`
  font-style: italic;
`;

const StyledMarkdown = styled(Markdown)`
  margin: 16px 40px;
  ${({ theme }) => theme.media.phone`
     margin: 0 auto;
  `}
  p {
    width: 380px;
  }
`;

const src = (images) => {
  let image;
  images?.forEach((img) => {
    if (img.title.includes("headshot")) {
      image = img.src;
    } else {
      image = images[0]?.src;
    }
  });
  return { image };
};

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

  const { image: imageSrc } = src(imgSrc);

  return (
    <Wrapper>
      <H3>
        <Name>{name}</Name>
        <Title>({title})</Title>
      </H3>
      <Content>
        <StyledImage
          src={imageSrc}
          alt={`${name} headshot`}
          credit={imgCredit}
          imageSize="100%"
        ></StyledImage>
        <StyledMarkdown>{bio}</StyledMarkdown>
      </Content>
    </Wrapper>
  );
}
