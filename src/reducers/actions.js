export function accountCreationRequested(data) {
  return {
    type: 'ACCOUNT_CREATION_REQUESTED',
    payload: data
  };
}
