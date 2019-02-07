import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Input from './Input';

describe('<Input />', () => {
  it('It should render without crashing', () => {
    expect(mount.bind(null, <Input />)).not.toThrow();
  });

  it('should call the onchange handler', () => {
    const handler = sinon.spy();
    const wrapper = shallow(<Input onChange={handler} />);
    wrapper.find('input').simulate('change');
    expect(handler.calledOnce).toBe(true);
  });
});
