import React, { useContext, useState, useEffect } from "react";
import Loading from "../../Loading";
import { ResourcesContext, PagesContext } from "../../../Providers";
import Page from "../../../layouts/Page";
import { Bio, Button } from "../../../styledGuide";
import styled, { css } from "styled-components/macro";
import { FaBorderNone } from "react-icons/fa";

const navLabels = ["Dancers", "Apprentices", "Guest Performers", "Staff"];

// Removes director prop since it's not meant to be passed to the component
const getBio = ({ director, ...bio }) => <Bio {...bio} key={bio.name} />;
// We separate director (Diane) from all other staff members to be able to place Diane in a special section
const isNotDirector = ({ director }) => !director;

const H2 = styled.h2`
  text-align: center;
  ${({ theme }) =>
    `margin:${theme.spacing.M} ${theme.spacing.M} ${theme.spacing.XL} ${theme.spacing.M}`};
  color: ${({ theme }) => theme.colors.red};
`;
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  position: relative;
  border-radius: 100%;
  border: 1px solid teal;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.mobile`
      display: none;
    `}
`;

const NavResoucesDiv = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    position: absolute;
    width: 400px;
    height: 300px;
    /* left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px; */
  `
);

const NavButton = styled(Button)(
  ({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: none;
    font-size: 24px;
  `
);

const DivTest = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 100%;
  -webkit-transition: all 1s;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DesktopBios() {
  const { performers, apprentices, guestPerformers, staff } = useContext(
    ResourcesContext
  ).resourceObj;
  const [data, setData] = useState({
    role: "performers",
    resouces: performers,
  });

  useEffect(() => {
    const circle = document.getElementById("box");
    const imgs = document.querySelectorAll("img[data-div]");
    const total = imgs.length;
    const coords = {};
    let diam;
    let radius1;
    let radius2;
    let imgW;
    console.log({ imgs });

    // get circle diameter
    // getBoundingClientRect outputs the actual px AFTER transform
    //      using getComputedStyle does the job as we want
    diam = parseInt(window.getComputedStyle(circle).getPropertyValue("width"));
    const radius = diam / 2;
    imgW = imgs[0].getBoundingClientRect().width;
    // // get the dimensions of the inner circle we want the images to align to
    radius2 = radius - imgW;

    let alpha = Math.PI / 2;
    const len = imgs.length;
    const corner = (2 * Math.PI) / total;

    for (let i = 0; i < total; i++) {
      imgs[i].style.left =
        parseInt(radius - imgW / 2 + radius2 * Math.cos(alpha)) + "px";
      imgs[i].style.top =
        parseInt(radius - imgW / 2 - radius2 * Math.sin(alpha)) + "px";

      alpha = alpha - corner;
    }
  }, [data]);
  const onNavClick = (label) => {
    console.log(label);
    switch (label) {
      case "Dancers":
        setData({ ...data, role: "performers", resouces: performers });
        break;
      case "Apprentices":
        setData({ ...data, role: "apprentices", resouces: apprentices });
        break;
      case "Guest Performers":
        setData({
          ...data,
          role: "guestPerformers",
          resouces: guestPerformers,
        });
        break;
      case "Staff":
        setData({ ...data, role: "staff", resouces: staff });
        break;
      default:
        setData({ ...data, role: "performers", resouces: performers });
    }
  };
  const { getPage } = useContext(PagesContext);
  const page = getPage("bios");

  if (!page) {
    return <Loading />;
  }
  const { options, pageName, ...headerBanner } = page;
  const { role, resouces } = data;
  console.log({ data });
  return (
    // <Page headerBanner={headerBanner}>
    <Wrapper id="box">
      <NavResoucesDiv>
        {navLabels.map((label, index) => (
          <NavButton key={index} onClick={() => onNavClick(label)}>
            <span>{label}</span>
          </NavButton>
        ))}
      </NavResoucesDiv>
      {data?.resouces?.map((resouce, index) => (
        <DivTest
          data-div="test"
          key={index}
          src={resouce.images ? resouce?.images[0]?.src : resouce?.image?.src}
        />
      ))}
    </Wrapper>
  );
}
