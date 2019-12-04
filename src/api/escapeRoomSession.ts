import "whatwg-fetch";

import { getCSRFTokenCookieValue } from "./cookies";
import { getGraphQLPrivateEndpointURL } from "../config/server";
import { IEscapeRoomSessionInformation } from "../myAccount/EscapeRoomSessionCreationForm";

function buildCreateEscapeRoomPayload(
  escapeRoomSession: IEscapeRoomSessionInformation
) {
  return {
    query: `mutation($name: String!, $playedDatetime: DateTime!, $durationTime: Float!, $numberOfHints: Int!) {
        createRoomSession(name: $name, playedDatetime: $playedDatetime, durationTime: $durationTime, numberOfHints: $numberOfHints) {
        roomSession {
          name
        }
      }
    }`,
    variables: {
      name: escapeRoomSession.name,
      playedDatetime: new Date(escapeRoomSession.playedDatetime),
      durationTime: escapeRoomSession.durationTime,
      numberOfHints: escapeRoomSession.numberOfHints
    }
  };
}

export function apiCreateEscapeRoomSession(
  data: IEscapeRoomSessionInformation
) {
  const GRAPHQL_ENDPOINT = getGraphQLPrivateEndpointURL();
  const payload = buildCreateEscapeRoomPayload(data);

  return fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFTokenCookieValue()
    },
    // Used to tell the server to send the Set-Cookie response header
    // containing user credentials (sessionid in case of Django basic auth)
    credentials: "include",
    body: JSON.stringify(payload)
  });
}
