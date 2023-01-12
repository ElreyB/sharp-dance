import React from "react";
import styled from "styled-components/macro";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { PagesContext } from "../../Providers";

const StyledCarousel = styled(Carousel)`
  display: none;
  ${({ theme }) => theme.media.phone`
      display: initial;
    `}
`;

export default function HeroCarousel() {
  const { getPage } = React.useContext(PagesContext);
  const page = getPage("home");

  const { images } = page;
  const imageSection = images.filter(({ title }) => title !== "current-show");
  return (
    <StyledCarousel
      fade
      interval={2000}
      variant="dark"
      controls={false}
      indicators={false}
    >
      {imageSection.map(({ src, title }, index) => (
        <Carousel.Item key={index}>
          <img alt={title} src={src} className="d-block w-100" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </StyledCarousel>
  );
}
