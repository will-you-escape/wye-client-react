import { storiesOf } from "@storybook/react";

import { givenDefaultHeader } from "./Header.spec";

storiesOf("Header", module).add("when non logged", () => {
  return givenDefaultHeader();
});
