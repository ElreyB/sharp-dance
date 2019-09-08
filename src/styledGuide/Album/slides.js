import React from "react";
import Poster from "./poster";
import { Grid } from "gymnast";
import Carousel, { ModalGateway, Modal } from "react-images";
import View from "./view";

export default function Slides({ sources }) {
  const [currentModal, setCurrentModal] = React.useState(null);

  return (
    <>
      <Grid className="slides" style={{ overflow: "hidden" }}>
        {sources.map(({ src }, i) => (
          <Poster
            margin="XS"
            key={i}
            src={src}
            onClick={() => setCurrentModal(i)}
          />
        ))}
      </Grid>
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
