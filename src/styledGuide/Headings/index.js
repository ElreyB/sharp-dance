import React from "react";
import textfit from "textfit";

import { useElementWidth } from "./useElementWidth";

function fitWrapper(Component, maxFontSize) {
  const Headers = ({ children, noResize, ...props }) => {
    const [ref, width, node] = useElementWidth();
    React.useLayoutEffect(() => {
      if (node && children && !noResize) {
        textfit(node, {
          widthOnly: true,
          alignHoriz: true,
          detectMultiLine: false,
          maxFontSize,
        });
      }
    }, [node, children, noResize, width]);

    return (
      <div ref={ref} justify="center" {...props}>
        {children && <div>{children}</div>}
      </div>
    );
  };
  Headers.displayName = Component;
  return Headers;
}

export const H1 = fitWrapper("h1", 18);
export const H2 = fitWrapper("h2", 16);
export const H3 = fitWrapper("h3", 15);
export const H4 = fitWrapper("h4", 14);
