import { storiesOf } from "@storybook/react";

import { givenDefaultOverlay } from "./Overlay.spec";

storiesOf("Overlay", module).add("with simple span", () => {
  return givenDefaultOverlay();
});
