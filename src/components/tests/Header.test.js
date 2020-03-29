import React from 'react';

import Header from '../Header';

import { shallow } from 'enzyme';

it('render correctly Card component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})

it('checks if shouldComponentUpadte', () => {
    const wrapper = shallow(<Header/>)
    const state = wrapper.state();
    const props = wrapper.props();
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(props, state)
    expect(shouldUpdate).toBe(false)
})