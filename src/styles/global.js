import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.colors.black};
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 2;
    font-family: ${({ theme }) => theme.fonts.sansSerif};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts.serif};
  }
  a {
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .react-images__pager {
    position: static !important;
  }
  .react-images__track {
    height: 100%;
  }
`;
