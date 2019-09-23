import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components";
import { H3 } from "../Headings";
import { Img } from "../Img";
import { Markdown } from "../Markdown";

const Name = props => <Grid {...props} size="fit" marginRight="S" />;
const StyledName = styled(Name)`
  color: ${({ theme }) => theme.colors.blue};
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
  const imageList = images || [image];

  if (!imageList[0]) {
    console.error("Image not found for", name);
  }

  return (
    <Grid {...props} align="start">
      <H3 size={{ mobile: 9, desktop: 12 }}>
        <StyledName>{name}</StyledName>
        <Grid size={12} show="mobile">
          {title}
        </Grid>
        {title && (
          <Grid size="auto" show="desktop">
            {title && `(${title})`}
          </Grid>
        )}
      </H3>
      <Grid size={3} margin={{ desktop: "0 M 0 0", mobile: "0 0 M 0" }}>
        {imageList.map(({ src }) => (
          <Img src={src} key={src} credit={imgCredit} margin="S 0 0 0" />
        ))}
      </Grid>
      <Markdown size="auto" marginBottom="2XL">
        {bio}
      </Markdown>
    </Grid>
  );
}

Bio.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  imgCredit: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string
    })
  ),
  bio: PropTypes.string
};
