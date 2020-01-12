import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { givenDefaultEscapeRoomSessionCreationForm } from "./EscapeRoomSessionCreationForm.spec";

storiesOf("EscapeRoomSessionCreationForm", module).add("with text", () => {
  return givenDefaultEscapeRoomSessionCreationForm(
    action("escape-room-session-creation-success")
  );
});
