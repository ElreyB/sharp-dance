import React from "react";
import styled from "styled-components/macro";
// import { H2, Img } from "../../styledGuide";
import { getPerformanceURL } from "./media.logic";
import { random } from "lodash";
import { A } from "../../styledGuide/A/A";
import Page from "../../layouts/Page";
import Image from "../../styledGuide/Image";

const StyledImg = styled(Image)`
  max-width: 100%;
  height: 300px;
  margin: ${({ theme }) => theme.spacing.M};
`;

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Border = styled.div`
  border: 10px solid ${({ theme }) => theme.colors.white};
  background-image: url(${({ photo }) => photo.src});
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
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
                <Border photo={photo}>
                  {/* <StyledImg alt={title} src={photo} /> */}
                </Border>
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
