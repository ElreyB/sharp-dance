import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components/macro";
import { P } from "../P";

const Blockquote = styled("blockquote")(
  ({ theme }) => css`
    color: ${theme.colors.mainTC};
    line-height: 1.4;
    font-style: italic;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 22px 0;
  `
);

const Cite = styled.cite``;

const StyledP = styled(P)`
  margin-bottom: 10px;
`;

const Footer = styled("footer")`
  color: ${({ theme }) => theme.colors.mainTC};
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
      <StyledP>{quote}</StyledP>
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
