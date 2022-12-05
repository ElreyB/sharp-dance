import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  position: fixed;
  font-size: 20px;
  bottom: 40px;
  right: 8px;
  background-color: ${({ theme }) => theme?.colors?.favorites?.teal};
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 52%;
  padding: 9px;
  z-index: 5;
  display: none;
  ${({ theme }) => theme.media.phone`
    display: initial;
  `}
`;

export function ScrollToTopButton({ children }) {
  return (
    <Button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      Top
    </Button>
  );
}
