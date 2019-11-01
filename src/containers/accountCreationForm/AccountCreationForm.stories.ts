import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { givenDefaultAccountCreationForm } from "./AccountCreationForm.spec";

storiesOf("AccountCreationForm", module).add("with text", () => {
  return givenDefaultAccountCreationForm(action("account-creation-success"));
});
