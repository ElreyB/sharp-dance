import React from "react";
import style, { keyframes } from "styled-components/macro";
import { Grid } from "gymnast";
import { SHARP } from "../../constants";

const pulse = keyframes`
      25% {
      opacity: 0.4;
    }

    100% {
      transform: scale(1);
    }
`;
const SVG = style("svg")``;

const Container = style(Grid)`
    position: relative;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;

    & ${SVG} {
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 30rem;
    }

    & ${SVG} circle {
      fill: ${({ theme }) => theme.colors.white};
      transform: scale(0);
      opacity: 0;
      transform-origin: 50% 50%;
      animation: ${pulse} 2s cubic-bezier(.5,.5,0,1);
      animation-iteration-count: infinite;

      &:nth-child(2) {
        fill: ${({ theme }) => theme.colors.blue};
        animation: ${pulse} 2s 1s cubic-bezier(.5,.5,0,1);
        animation-iteration-count: infinite;
      }

      &:nth-child(3) {
        fill: ${({ theme }) => theme.colors.white};
        animation: ${pulse} 2s 2s cubic-bezier(.5,.5,0,1);
        animation-iteration-count: infinite;
      }

    }
`;

const Logo = style.h2`
    color: ${({ theme }) => theme.colors.white};
`;

const Loading = () => {
  return (
    <Container>
      <Logo>{SHARP}</Logo>
      <SVG
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle cx="512" cy="512" r="512" />
        <circle cx="512" cy="512" r="512" />
        <circle cx="512" cy="512" r="512" />
      </SVG>
    </Container>
  );
};

export default Loading;
