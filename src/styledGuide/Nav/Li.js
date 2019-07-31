import React from "react";
import { useGrid } from "gymnast";

import { A } from "../A";

export const Li = ({ to, children, ...props }) => {
  const [, allProps] = useGrid({ size: "fit", margin: "0 M", ...props });

  return (
    <li {...allProps}>
      <A to={to}>{children}</A>
    </li>
  );
};
