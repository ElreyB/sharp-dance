import React from "react";
import { FullPageVideo, Page } from "../../styledGuide";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";
import styled from "styled-components/macro";

const CustomPage = styled(Page)`
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
