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

export function Bio({ name, role, imgCredit, bio, image, images, ...props }) {
  const imageList = images || [image];

  if (!imageList[0]) {
    console.error("Image not found for", name);
  }

  return (
    <Grid {...props} align="start">
      <H3>
        <StyledName>{name}</StyledName>
        {role && `(${role})`}
      </H3>
      <Grid size={3}>
        {imageList.map(({ src }) => (
          <Img src={src} key={src} credit={imgCredit} margin="S 0 0 0" />
        ))}
      </Grid>
      <Markdown marginLeft="M" size="auto">
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
