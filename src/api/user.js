import 'whatwg-fetch';

const HOST = 'http://localhost/';
const GRAPHQL_ENDPOINT = HOST + 'graphql/';

export function apiCreateAccount(data) {
  fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
