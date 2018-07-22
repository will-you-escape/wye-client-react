import 'whatwg-fetch';

import { getGraphQLEndpointURL } from '../config/server';

function buildLogInUserPayload(email, password) {
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

export function apiLogInUser(data) {
  const GRAPHQL_ENDPOINT = getGraphQLEndpointURL();
  const payload = buildLogInUserPayload(data.email, data.password);

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
