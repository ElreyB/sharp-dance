import React from "react";
import { useGrid } from "gymnast";
import { Ul } from "./Ul";
import { Li } from "./Li";

export function Nav({ links, ...props }) {
  const [, allProps] = useGrid(props);

  return (
    <nav {...allProps}>
      <Ul>
        {links.map(({ to, label, sub = [] }) => (
          <Li to={to} key={label} label={label}>
            {sub.length > 0 && (
              <Ul
                key={`${label}-ul`}
                size="fit"
                show="desktop"
                direction="column"
                margin="S 0 0 0"
              >
                {sub.map(li => (
                  <Li {...li} key={li.label} size="fit" />
                ))}
              </Ul>
            )}
          </Li>
        ))}
      </Ul>
    </nav>
  );
}
