import React from "react";
import styled from "styled-components/macro";

const LayOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const BackDrop = ({ onClick }) => <LayOver onClick={onClick} />;

export default BackDrop;
