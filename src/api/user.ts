import 'whatwg-fetch';

import { getGraphQLEndpointURL } from '../config/server';

function buildCreateAccountPayload(email, pseudo, password) {
  return {
    query: `mutation($email: String!, $pseudo: String!, $password: String!) {
      createUser(email: $email, pseudo: $pseudo, password: $password) {
        user {
          email,
          pseudo
        }
      }
    }`,
    variables: { email, pseudo, password }
  };
}

export function apiCreateAccount(data) {
  const GRAPHQL_ENDPOINT = getGraphQLEndpointURL();
  const payload = buildCreateAccountPayload(
    data.email,
    data.pseudo,
    data.password
  );

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
