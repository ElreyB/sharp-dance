import React from "react";
import PropTypes from "prop-types";
import { Blockquote } from "./Blockquote";
import { Footer } from "./Footer";
import { Cite } from "./Cite";
import { P } from "../P/P";

export const Quote = ({ source, author, quote, ...props }) => {
  if (!quote) {
    return <></>;
  }

  return (
    <Blockquote {...props}>
      <P>{quote}</P>
      <Footer justify="end">
        — {author}, <Cite size="fit">{source}</Cite>
      </Footer>
    </Blockquote>
  );
};

Quote.propTypes = {
  source: PropTypes.string,
  author: PropTypes.string,
  quote: PropTypes.string,
};
