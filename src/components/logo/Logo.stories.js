import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { givenDefaultLogo } from './Logo.spec';

storiesOf('Logo', module).add('default', () => {
  return givenDefaultLogo();
});
