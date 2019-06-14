import React from "react";
import PropTypes from "prop-types";
import { Blockquote } from "./blockquote";
import { Footer } from "./footer";
import { Cite } from "./cite";
import { P } from "../p";

export const Quote = ({ source, author, quote, ...props }) => {
  return (
    <Blockquote {...props}>
      <P>{quote}</P>
      <Footer>
        —{author}, <Cite>{source}</Cite>
      </Footer>
    </Blockquote>
  );
};

Quote.propTypes = {
  source: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};
