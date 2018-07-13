import 'whatwg-fetch';

import { getGraphQLEndpointURL } from '../config/server';

function buildLogUserPayload(email, password) {
  return {
    query: `mutation($email: String!, $password: String!) {
      logUser(email: $email, password: $password) {
        user {
          email,
          pseudo
        }
      }
    }`,
    variables: { email, password }
  };
}

export function apiLogUser(data) {
  const GRAPHQL_ENDPOINT = getGraphQLEndpointURL();
  const payload = buildLogUserPayload(data.email, data.password);

  return fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // Used to tell the server to send the Set-Cookie response header
    // containing user credentials (sessionid in case of Django basic auth)
    credentials: 'include',
    body: JSON.stringify(payload)
  });
}
