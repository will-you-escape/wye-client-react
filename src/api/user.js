import 'whatwg-fetch';

import { getGraphQLEndpointURL } from '../config/server';

export function apiCreateAccount(data) {
  const GRAPHQL_ENDPOINT = getGraphQLEndpointURL();

  return fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
