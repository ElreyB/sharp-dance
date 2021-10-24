import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { P } from "../P";

const Blockquote = styled("blockquote")`
  color: ${({ theme }) => theme.colors.red};
  line-height: 1.4;
  font-style: italic;
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.XL};
`;

const Cite = styled.cite``;

const Footer = styled("footer")`
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  text-align: ${({ align }) => align};
`;

export const Quote = ({
  source,
  author,
  quote,
  alignAuthor = "right",
  ...props
}) => {
  if (!quote) {
    return null;
  }

  return (
    <Blockquote {...props}>
      <P>{quote}</P>
      <Footer align={alignAuthor}>
        — {author}, <Cite>{source}</Cite>
      </Footer>
    </Blockquote>
  );
};

Quote.propTypes = {
  source: PropTypes.string,
  author: PropTypes.string,
  quote: PropTypes.string,
  alignAuthor: PropTypes.string,
};
