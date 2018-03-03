import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { givenDefaultHeaderLogin } from './HeaderLogin.spec';

storiesOf('HeaderLogin', module).add('with text', () => {
  return givenDefaultLoginForm();
});
