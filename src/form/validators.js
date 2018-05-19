export const required = value => (value ? undefined : 'Required');

export const identicalToPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Not identical to pasword';
