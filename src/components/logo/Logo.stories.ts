import { storiesOf } from "@storybook/react";

import { givenDefaultLogo } from "./Logo.spec";

storiesOf("Logo", module).add("default", () => {
  return givenDefaultLogo();
});
