import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Overlay from './Overlay';

describe('<Overlay/>', () => {
  it('renders default Overlay', () => {
    const wrapper = mount(givenDefaultOverlay());
  });

  it('renders passed children without alteration', () => {
    const wrapper = mount(
      <Overlay>
        <span className="span-child-testingonly">This is an overlay child</span>
      </Overlay>
    );
    expect(wrapper.find('.span-child-testingonly')).to.have.length(1);
    expect(wrapper.find('.span-child-testingonly').text()).to.equal(
      'This is an overlay child'
    );
  });

  it('triggers "onClose" action when clicking on close sign', () => {
    const onCloseSpy = sinon.spy();
    const wrapper = mount(<Overlay onClose={onCloseSpy} />);
    findCloseSign(wrapper).simulate('click');
    expect(onCloseSpy.called).to.be.true;
  });

  function findCloseSign(wrapper) {
    return wrapper.find('.close-sign button');
  }
});

export function givenDefaultOverlay() {
  const onClose = () => alert('Closing overlay action');
  return (
    <Overlay onClose={onClose}>
      <span>This is an overlay content</span>
    </Overlay>
  );
}
