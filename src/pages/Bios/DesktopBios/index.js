import React, { useContext, useState, useEffect } from "react";
import Loading from "../../Loading";
import { ResourcesContext, PagesContext } from "../../../Providers";
import { Button } from "../../../styledGuide";
import styled, { css } from "styled-components/macro";

const navLabels = ["Dancers", "Apprentices", "Guest Performers", "Staff"];

const Wrapper = styled.div`
  width: 1200px;
  height: 1200px;
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
  ({ theme, isFront }) => css`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    position: absolute;
    width: 400px;
    height: 300px;
    visibility: ${({ isFront }) => (!isFront ? "visible" : "hidden")};
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
    color: ${theme.colors.mainTC};

    :hover {
      color: ${theme.colors.favorites.teal};
    }
  `
);

const DivTest = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
  -webkit-transition: all 1s;
  background-color: black;
`;

const ImageButton = styled.button`
  width: 150px;
  height: 150px;
  border: none;
  position: absolute;
  border-radius: 50%;
  -webkit-transition: all 1s;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoDiv = styled.div`
  width: 1200px;
  height: 1200px;
  border-radius: 100%;
  /* border: 1px solid teal; */
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  visibility: ${({ isFront }) => (!isFront ? "hidden" : "visible")};

  ${({ theme }) => theme.media.mobile`
      display: none;
    `}
`;

const Section = styled.section`
  width: 50%;
  height: 100%;
  /* border: solid 1px white; */
  background-color: black;
  color: white;

  :first-of-type {
    border-radius: 100% 30% 30% 100%;
  }

  :last-of-type {
    border-radius: 30% 100% 100% 30%;
    :hover {
      opacity: 0.5;
    }
  }
`;

const P = styled.p`
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  border-radius: 100% 0 0 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 100% 100% 0;
`;

export default function DesktopBios() {
  const { performers, apprentices, guestPerformers, staff } =
    useContext(ResourcesContext).resourceObj;
  const [data, setData] = useState({
    role: "performers",
    resouces: performers,
  });
  const [infor, setInfor] = useState({});

  useEffect(() => {
    if (!infor.id) {
      const circle = document.getElementById("box");
      const imgs = document.querySelectorAll("button[data-div]");
      const total = imgs.length;
      // const coords = {};
      let diam;
      // let radius1;
      let radius2;
      let imgW;

      // get circle diameter
      // getBoundingClientRect outputs the actual px AFTER transform
      //      using getComputedStyle does the job as we want
      diam = parseInt(
        window.getComputedStyle(circle).getPropertyValue("width")
      );
      const radius = diam / 2;
      imgW = imgs[0].getBoundingClientRect().width;
      // // get the dimensions of the inner circle we want the images to align to
      radius2 = radius - imgW;

      let alpha = Math.PI / 2;
      // const len = imgs.length;
      const corner = (2 * Math.PI) / total;

      for (let i = 0; i < total; i++) {
        imgs[i].style.left =
          parseInt(radius - imgW / 2 + radius2 * Math.cos(alpha)) + "px";
        imgs[i].style.top =
          parseInt(radius - imgW / 2 - radius2 * Math.sin(alpha)) + "px";

        alpha = alpha - corner;
      }
    }
  }, [data, infor]);

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
  console.log("Bio", infor?.images);
  const src = (data) => {
    console.log(typeof data);
    let image;
    const title = data.images ? data?.images[0]?.title : data?.image?.title;
    if (data.images) {
      data.images.forEach((img) => {
        if (img.title.includes("headshot")) {
          image = img.src;
        } else {
          image = data?.images[0]?.src;
        }
        console.log(img.title.includes("headshot"));
      });
    } else {
      image = data?.image?.src;
    }
    return { image, title };
  };

  const { image, title } = src(infor);
  console.log({ image, title });
  return (
    <Wrapper id="box">
      <InfoDiv isFront={!!infor?.id}>
        <Section>
          <P>
            <span>{infor.name}</span>
            <span>{infor.title}</span>
            {infor?.bio}
          </P>
        </Section>
        <Section onClick={() => setInfor({})}>
          <Image src={image} alt={title} />
        </Section>
      </InfoDiv>

      <NavResoucesDiv isFront={!!infor?.id}>
        {navLabels.map((label, index) => (
          <NavButton key={index} onClick={() => onNavClick(label)}>
            <span>{label}</span>
          </NavButton>
        ))}
      </NavResoucesDiv>
      {!infor?.id &&
        data?.resouces?.map((resouce, index) => {
          const { image, title } = src(resouce);
          return (
            <ImageButton
              type="button"
              data-div="test"
              key={index}
              onClick={() => setInfor(resouce)}
            >
              <DivTest src={image} alt={title} />
            </ImageButton>
          );
        })}
    </Wrapper>
  );
}
