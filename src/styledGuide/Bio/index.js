import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components";
import { H3 } from "../Headings";
import { Img } from "../Img";
import { Markdown } from "../Markdown";

const colors = [
  "goldenrod",
  "rebeccapurple",
  "deeppink",
  "lightblue",
  "limegreen"
];

const Name = ({ headerColor, ...props }) => <Grid {...props} />;
const StyledName = styled(Name)`
  color: ${({ headerColor }) => colors[headerColor % colors.length]};
`;

export function Bio({
  name,
  role,
  imgCredit,
  imgSrc,
  bio,
  headerColor,
  ...props
}) {
  return (
    <Grid {...props} align="start">
      <H3>
        <StyledName size="fit" marginRight="S" headerColor={headerColor}>
          {name}
        </StyledName>
        {role && `(${role})`}
      </H3>
      <Img src={imgSrc} size={3} credit={imgCredit} />
      <Markdown size="auto">{bio}</Markdown>
    </Grid>
  );
}

Bio.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  imgCredit: PropTypes.string,
  imgSrc: PropTypes.string,
  bio: PropTypes.string,
  headerColor: PropTypes.number
};
