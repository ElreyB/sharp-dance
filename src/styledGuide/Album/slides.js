import React from "react";
import Poster from "./poster";
import Carousel, { ModalGateway, Modal } from "react-images";
import View from "./view";
import styled from "styled-components/macro";

const PosterWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  ${({ theme: { media } }) => media.mobile`
    justify-content: space-evenly;
  `};
`;

export default function Slides({ sources }) {
  const [currentModal, setCurrentModal] = React.useState(null);

  return (
    <>
      <PosterWrapper className="slides" style={{ overflow: "hidden" }}>
        {sources.map(({ src }, i) => (
          <Poster
            margin="XS"
            key={i}
            src={src}
            onClick={() => setCurrentModal(i)}
          />
        ))}
      </PosterWrapper>
      <ModalGateway>
        {currentModal !== null ? (
          <Modal
            allowFullscreen={false}
            closeOnBackdropClick={false}
            onClose={() => setCurrentModal(null)}
          >
            <Carousel
              currentIndex={currentModal}
              components={{ View }}
              frameProps={{ autoSize: "height" }}
              views={sources}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}
