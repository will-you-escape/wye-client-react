import 'whatwg-fetch';

import { getGraphQLPrivateEndpointURL } from '../config/server';
import { getCSRFTokenCookieValue } from './cookies';

function buildWhoAmIPayload() {
  return {
    query: `{ whoami }`
  };
}

export function apiWhoAmI() {
  const GRAPHQL_ENDPOINT = getGraphQLPrivateEndpointURL();
  const payload = buildWhoAmIPayload();

  return fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCSRFTokenCookieValue()
    },
    // Used to tell the server to send the Set-Cookie response header
    // containing user credentials (sessionid in case of Django basic auth)
    credentials: 'include',
    body: JSON.stringify(payload)
  });
}
