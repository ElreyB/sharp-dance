import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { H3 } from "../Headings";
import { Img } from "../Img";
import { Markdown } from "../Markdown";

const Name = (props) => <div {...props} marginRight="S" />;
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
    <div {...props}>
      <H3 size={12} justify={{ desktop: "start", mobile: "center" }} noResize>
        <StyledName size={{ desktop: "fit", mobile: 12 }} justify="center">
          {name}
        </StyledName>
        <div show="mobile" justify="center">
          {title}
        </div>
        {title && (
          <div show="desktop" size="auto">
            ({title})
          </div>
        )}
      </H3>
      <div
        size={{ desktop: 3, mobile: 12 }}
        margin={{ desktop: "0 M 0 0", mobile: "0 M XL" }}
      >
        <div justify="center" size={{ desktop: 12, mobile: 6 }}>
          {imageList.map(({ src }) => (
            <Img src={src} key={src} credit={imgCredit} margin="S 0 0 0" />
          ))}
        </div>
      </div>
      <Markdown size="auto" marginBottom="2XL">
        {bio}
      </Markdown>
    </div>
  );
}

Bio.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  imgCredit: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ),
  bio: PropTypes.string,
};
