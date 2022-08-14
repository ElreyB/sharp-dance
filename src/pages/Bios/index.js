import React, { useContext } from "react";
import Page from "../../layouts/Page";
import { PagesContext } from "../../Providers";
import Loading from "../Loading";
// import DesktopBios from "./DesktopBios";
import MobileBios from "./MobileBios";

export default function Bios() {
  const { getPage } = useContext(PagesContext);
  const page = getPage("bios");

  if (!page) {
    return <Loading />;
  }
  const { options, pageName, ...headerBanner } = page;
  return (
    <Page headerBanner={headerBanner}>
      {/* <DesktopBios /> */}
      <MobileBios />
    </Page>
  );
}
