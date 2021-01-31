import React from "react";
import { Grid } from "gymnast";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { A } from "../A/A";
import styled from "styled-components";

const IconLink = styled(A)`
  width: 33.33%;
`;

export const SocialIcons = ({ className, ...props }) => {
  return (
    <Grid size="fit" className={className} {...props}>
      <IconLink href="https://www.facebook.com/sharpdance/">
        <Grid padding="S 0">
          <FaFacebookF size={24} />
        </Grid>
      </IconLink>
      <IconLink href="https://www.instagram.com/sharpdancephilly/">
        <Grid padding="S 0">
          <FaInstagram size={24} />
        </Grid>
      </IconLink>
      <IconLink href="https://twitter.com/sharpdancephila/">
        <Grid padding="S 0">
          <FaTwitter size={24} />
        </Grid>
      </IconLink>
    </Grid>
  );
};
