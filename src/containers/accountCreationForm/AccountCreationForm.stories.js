import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AccountCreationForm from './AccountCreationForm';

storiesOf('AccountCreationForm', module).add('with text', () => {
  return (
    <AccountCreationForm
      onAccountCreationSuccess={action('account-creation-success')}
    />
  );
});
