import React from "react";
import styled from "styled-components/macro";
import { getPerformanceURL } from "./media.logic";
import { random } from "lodash";
import { A } from "../../styledGuide";
import Page from "../../layouts/Page";

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Border = styled.div`
  border: 10px solid ${({ theme }) => theme.colors.white};
  background-image: url(${({ photo }) => photo.src});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MediaAnchor = styled(A)`
  display: inline-block;
  width: 50%;
  padding: ${({ theme }) => `${theme.spacing.L} ${theme.spacing.S}`};
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const H2 = styled.h2`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.mainTC};
`;

export default function Media({ headerBanner, media }) {
  const filterMedia = media.filter((album) => Number(album.id) < 6);
  return (
    <Page headerBanner={headerBanner}>
      <MediaContainer>
        {filterMedia.length > 0 ? (
          filterMedia.map(({ title, images }, i) => {
            const photo = images[random(0, images.length - 1)];
            return (
              <MediaAnchor to={getPerformanceURL(title)} key={title}>
                <H2>{title}</H2>
                <Border photo={photo} />
              </MediaAnchor>
            );
          })
        ) : (
          <H2>No albums available</H2>
        )}
      </MediaContainer>
    </Page>
  );
}
