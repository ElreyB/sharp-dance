import React, { createContext, useState, useEffect } from "react";
import useCollection from "../firestore/useCollection";

const MediaContext = createContext();

const MediaProvider = ({ children }) => {
  const [media, setMedia] = useState([]);

  const { data: mediaCollection } = useCollection("media");

  useEffect(() => setMedia(mediaCollection ? mediaCollection : []), [
    mediaCollection
  ]);

  return (
    <MediaContext.Provider value={media}>{children}</MediaContext.Provider>
  );
};

export { MediaProvider, MediaContext };
