import React from 'react';

import ErrorBoundry from '../ErrorBoundry';

import { shallow } from 'enzyme';

it('render correctly ErrorBoundry component', () => {
    const wrapper = shallow(<ErrorBoundry children={'children'} />);
    expect(wrapper).toMatchSnapshot();
})

it('catches any error', () => {
    const mockError = new Error
    const wrapper = shallow(<ErrorBoundry children={'children'} />);
    wrapper.instance().componentDidCatch(mockError)
    expect(wrapper.state().hasError).toEqual(true)
})