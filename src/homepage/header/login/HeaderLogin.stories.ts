import { storiesOf } from "@storybook/react";

import { givenDefaultHeaderLogin } from "./HeaderLogin.spec";

storiesOf("HeaderLogin", module).add("with text", () => {
  return givenDefaultHeaderLogin();
});
