import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Form from './Form';



describe('<Form />', () => {
  let root;

  beforeEach(() => {
    root = document.createElement('div');
  });

  it('Should render without crashing', () => {
    const form = new Form();
    render(form.render(), root);
    unmountComponentAtNode(root);
  });

  it('should toggle the toggle button', () => {
    const form = new Form({});
    form.toggleRememberMe = sinon.spy();
    const wrapper = mount(form.render());
    wrapper.find('input').simulate('click');
    expect(form.toggleRememberMe.calledOnce).toBe(true);
  });
});
