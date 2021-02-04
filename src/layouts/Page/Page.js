import React from "react";
import { node } from "prop-types";
import { Banner } from "../../styledGuide";

export default function Page({ children, headerBanner, ...props }) {
  return (
    <div {...props}>
      {headerBanner && <Banner {...headerBanner} />}
      {children}
    </div>
  );
}

Page.propTypes = {
  children: node.isRequired,
};
