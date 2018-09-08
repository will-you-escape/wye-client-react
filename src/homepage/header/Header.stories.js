import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { givenDefaultHeader } from './Header.spec';

storiesOf('Header', module).add('when non logged', () => {
  return givenDefaultHeader();
});
