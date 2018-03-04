import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';

import LoginForm from './LoginForm';

describe('<LoginForm/>', () => {
  it('renders default LoginForm', () => {
    const wrapper = mount(givenDefaultLoginForm());
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('form input')).to.have.length(2);
  });
});

export function givenDefaultLoginForm() {
  const onLoginSuccess = () => alert('Login successful');
  return <LoginForm onLoginSuccess={onLoginSuccess} />;
}
