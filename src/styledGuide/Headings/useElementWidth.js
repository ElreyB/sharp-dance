import { throttle } from "lodash";
import React from "react";

export function useElementWidth() {
  function getWidth() {
    return node ? node.offsetWidth || 0 : 0;
  }

  const ref = React.useCallback((node) => {
    if (node !== null) {
      setWidth(node.offsetWidth || 0);
    }
    setNode(node);
    return node;
  }, []);
  const [node, setNode] = React.useState(null);
  const [width, setWidth] = React.useState(0);

  const updateWidth = throttle(() => {
    const newWidth = getWidth();

    if (width !== newWidth && newWidth !== 0) {
      setWidth(newWidth);
    }
  }, 100);

  React.useLayoutEffect(() => {
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  return [ref, width, node];
}
