import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { A } from "../A/A";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 0;
  flex-shrink: 0;
  width: auto;
  white-space: nowrap;
`;

const IconLink = styled(A)`
  width: 33.33%;
`;

export const SocialIcons = (props) => {
  return (
    <Wrapper {...props}>
      <IconLink href="https://www.facebook.com/sharpdance/">
        <FaFacebookF size={24} />
      </IconLink>
      <IconLink href="https://www.instagram.com/sharpdancephilly/">
        <FaInstagram size={24} />
      </IconLink>
      <IconLink href="https://twitter.com/sharpdancephila/">
        <FaTwitter size={24} />
      </IconLink>
    </Wrapper>
  );
};
