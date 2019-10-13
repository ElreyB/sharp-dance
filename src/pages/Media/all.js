import React from "react";
import styled from "styled-components";
import { Grid } from "gymnast";
import { Page, Banner, H2, A, Img } from "../../styledGuide";
import { getPerformanceURL } from "./media.logic";
import { random } from "lodash";

const StyledImg = styled(Img)`
  max-width: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
const Border = styled(Grid)`
  background: ${({ theme }) => theme.colors.black};
`;

export default function AllPerformances({ headerBanner, media }) {
  const filterMedia = media.filter(album => Number(album.id) < 6);
  return (
    <Page>
      <Banner {...headerBanner} />
      {filterMedia.length > 0 ? (
        filterMedia.map(({ title, images }, i) => {
          const photo = images[random(0, images.length - 1)];
          return (
            <A
              to={getPerformanceURL(title)}
              key={title}
              size={{ mobile: 12, desktop: 6 }}
              marginBottom="XL"
            >
              <H2 justify="center">{title}</H2>
              <Border margin="S" size="auto">
                <StyledImg margin="M" align="center" alt={title} src={photo} />
              </Border>
            </A>
          );
        })
      ) : (
        <H2>No albums available</H2>
      )}
    </Page>
  );
}
