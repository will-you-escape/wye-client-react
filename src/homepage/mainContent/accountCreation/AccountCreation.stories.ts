import { storiesOf } from "@storybook/react";

import { givenDefaultAccountCreation } from "./AccountCreation.spec";

storiesOf("AccountCreation", module).add("with text", () => {
  return givenDefaultAccountCreation();
});
