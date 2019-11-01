import { storiesOf } from "@storybook/react";

import { givenDefaultLoginForm } from "./LoginForm.spec";

storiesOf("LoginForm", module).add("with text", () => {
  return givenDefaultLoginForm();
});
