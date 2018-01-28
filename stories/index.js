import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginForm from '../src/containers/LoginForm';

storiesOf('LoginForm', module)
  .add('with text', () => (
    <LoginForm/>
  ));
