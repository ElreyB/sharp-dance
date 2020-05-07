import React from "react";
import { useGrid } from "gymnast";

export function Input(props) {
  const [, allProps] = useGrid(props);
  return <input {...allProps} />;
}
