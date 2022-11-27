import React from "react";
import style, { keyframes } from "styled-components/macro";

const leftLine = keyframes`
      0%,
      100% {
        transform: translateX(-100%) scaleX(1);
      }

      25%,
      75% {
        transform: translateX(-25%) scaleX(1);
      }

      50% {
        transform: translateX(50%) scaleX(0.3);
      }

    }`;

const rightLine = keyframes`
      0%,
      100% {
        transform: translateX(100%) scaleX(1);
      }

      25%,
      75% {
        transform: translateX(25%) scaleX(1);
      }

      50% {
        transform: translateX(-50%) scaleX(0.3);
      }
    }
`;
const duration = 3;
const thickness = 3;

const Lines = style.div`
      position: fixed;
      z-index: 100;
      background-color: black;
      width: 100vw;
      height: 100vh;
      animation-fill-mode: forwards;

     &::before,
   &::after {
      position: absolute;
      display: block;
      top: 50%;
      width: 50%;
      height: ${thickness}px;
      content: ' ';
      background-color: white;
    }

   &::before {
      animation: ${leftLine} linear ${duration}s infinite;
      left: 0;
      transform: translateX(-100%);
    }

   &::after {
      animation: ${rightLine} linear ${duration}s infinite;
      right: 0;
      transform: translateX(100%);
`;

const Loading = () => <Lines />;

export default Loading;
