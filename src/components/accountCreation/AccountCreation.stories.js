import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { givenDefaultAccountCreation } from './AccountCreation.spec';

storiesOf('AccountCreation', module).add('with text', () => {
  return givenDefaultAccountCreation();
});
