import React from "react";
import { useGrid } from "gymnast";
import { Ul } from "./Ul";
import { Li } from "./Li";

export function Nav({ links, ...props }) {
  const [, allProps] = useGrid(props);

  return (
    <nav {...allProps}>
      <Ul>
        {links.map(({ to, label }) => (
          <Li to={to} key={label}>
            {label}
          </Li>
        ))}
      </Ul>
    </nav>
  );
}
