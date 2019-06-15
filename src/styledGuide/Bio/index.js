import React from "react";
import PropTypes from "prop-types";
import { Grid } from "gymnast";
import styled from "styled-components";
import { H3 } from "../Headings";
import { Img } from "../Img";
import { Markdown } from "../Markdown";

const Name = props => <Grid {...props} size="fit" marginRight="S" />;
const StyledName = styled(Name)`
  color: ${({ theme }) => theme.colors.blue};
`;

export function Bio({ name, role, imgCredit, imgSrc, bio, ...props }) {
  return (
    <Grid {...props} align="start">
      <H3>
        <StyledName>{name}</StyledName>
        {role && `(${role})`}
      </H3>
      <Img src={imgSrc} size={3} credit={imgCredit} margin="S 0 0 0" />
      <Markdown marginLeft="M" size="auto">
        {bio}
      </Markdown>
    </Grid>
  );
}

Bio.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  imgCredit: PropTypes.string,
  imgSrc: PropTypes.string,
  bio: PropTypes.string
};
