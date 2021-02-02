import React from "react";
import { FullPageVideo, Page } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";
import styled from "styled-components/macro";

const CustomPage = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  z-index: 0;
  max-width: 100vw;
  padding-bottom: 0 !important;
  position: absolute;
  top: -36px;
`;

export default function Home() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("home");

  if (!page) {
    return <Loading />;
  }

  const { options = {} } = page;

  return (
    <CustomPage>
      <FullPageVideo src={options.video} />
    </CustomPage>
  );
}
