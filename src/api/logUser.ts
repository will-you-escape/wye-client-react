import "whatwg-fetch";

import {
  getGraphQLEndpointURL,
  getGraphQLPrivateEndpointURL
} from "../config/server";
import { getCSRFTokenCookieValue } from "./cookies";

export interface ILogInData {
  email: string;
  password: string;
}

function buildLogInUserPayload(email: string, password: string) {
  return {
    query: `mutation($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        user {
          email,
          pseudo
        }
      }
    }`,
    variables: { email, password }
  };
}

function buildLogOutUserPayload() {
  return {
    query: `mutation {
      logoutUser {
        user {
          email
        }
      }
    }`
  };
}

export function apiLogOutUser() {
  const GRAPHQL_ENDPOINT = getGraphQLPrivateEndpointURL();
  const payload = buildLogOutUserPayload();

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

export function apiLogInUser(data: ILogInData) {
  const GRAPHQL_ENDPOINT = getGraphQLEndpointURL();
  const payload = buildLogInUserPayload(data.email, data.password);

  return fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // Used to tell the server to send the Set-Cookie response header
    // containing user credentials (sessionid in case of Django basic auth)
    credentials: "include",
    body: JSON.stringify(payload)
  });
}
