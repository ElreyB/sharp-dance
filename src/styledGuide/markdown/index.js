import * as React from "react";
import marked from "marked";
import { Grid } from "gymnast";

export function Markdown({ children, ...props }) {
  return (
    <Grid
      {...props}
      align="start"
      dangerouslySetInnerHTML={{ __html: marked(children) }}
    />
  );
}
