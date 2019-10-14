import React from "react";
import { Grid } from "gymnast";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { A } from "../A";

export const SocialIcons = ({ className, ...props }) => {
  return (
    <Grid size="fit" className={className} {...props}>
      <A href="https://www.facebook.com/sharpdance/" size={6}>
        <Grid padding="S 0">
          <FaFacebookF size={24} />
        </Grid>
      </A>
      <A href="https://www.instagram.com/sharpdancephilly/" size={6}>
        <Grid padding="S 0">
          <FaInstagram size={24} />
        </Grid>
      </A>
    </Grid>
  );
};
