import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { givenDefaultLoginForm } from './LoginForm.spec';

storiesOf('LoginForm', module).add('with text', () => {
  return givenDefaultLoginForm();
});
