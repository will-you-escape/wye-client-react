import urljoin from 'url-join';

export function getServerRootURL() {
  const serverRootURL = process.env.REACT_APP_SERVER_ROOT_URL;
  if (!serverRootURL) {
    throw new Error(
      'No server URL configured. Please set REACT_APP_SERVER_ROOT_URL environment variable.'
    );
  }
  return serverRootURL;
}

export function getGraphQLEndpointURL() {
  const serverRootURL = getServerRootURL();
  return urljoin(serverRootURL, 'graphql/');
}
