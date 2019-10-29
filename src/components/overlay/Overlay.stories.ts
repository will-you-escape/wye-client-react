import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { givenDefaultOverlay } from './Overlay.spec';

storiesOf('Overlay', module).add('with simple span', () => {
  return givenDefaultOverlay();
});
