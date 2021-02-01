import React from "react";
import styled from "styled-components/macro";
import { Grid } from "gymnast";
import { Page, Banner, H2, Img } from "../../styledGuide";
import { getPerformanceURL } from "./media.logic";
import { random } from "lodash";
import { A } from "../../styledGuide/A/A";

const StyledImg = styled(Img)`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.white};
  height: 300px;

  ${Img.ImgGrid} {
    height: 100%;
  }
`;

const Border = styled(Grid)`
  background: ${({ theme }) => theme.colors.black};
`;

const MediaAnchor = styled(A)`
  width: 50%;
  padding: ${({ theme }) => `${theme.spacing.L} ${theme.spacing.S}`};
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

export default function Media({ headerBanner, media }) {
  const filterMedia = media.filter((album) => Number(album.id) < 6);
  return (
    <Page>
      <Banner {...headerBanner} />
      {filterMedia.length > 0 ? (
        filterMedia.map(({ title, images }, i) => {
          const photo = images[random(0, images.length - 1)];
          return (
            <MediaAnchor to={getPerformanceURL(title)} key={title}>
              <H2 justify="center">{title}</H2>
              <Border margin="S" size="auto">
                <StyledImg margin="M" align="center" alt={title} src={photo} />
              </Border>
            </MediaAnchor>
          );
        })
      ) : (
        <H2>No albums available</H2>
      )}
    </Page>
  );
}
