import { throttle } from "lodash";
import React from "react";

export function useElementHeight() {
  function getHeight() {
    return node ? node.offsetHeight || 0 : 0;
  }

  const ref = React.useCallback((node) => {
    if (node !== null) {
      setHeight(node.offsetHeight || 0);
    }
    setNode(node);
    return node;
  }, []);
  const [node, setNode] = React.useState(null);
  const [height, setHeight] = React.useState(0);

  const updateHeight = throttle(() => {
    const newHeight = getHeight();

    if (height !== newHeight && newHeight !== 0) {
      setHeight(newHeight);
    }
  }, 100);

  React.useLayoutEffect(() => {
    window.addEventListener("resize", updateHeight, { passive: true });
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight]);

  return [ref, height];
}
