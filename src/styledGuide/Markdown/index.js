import React from "react";
import { marked } from "marked";

export function Markdown({ children = "", ...props }) {
  return (
    <div {...props} dangerouslySetInnerHTML={{ __html: marked(children) }} />
  );
}
