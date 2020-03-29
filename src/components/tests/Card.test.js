import React from 'react';

import Card from '../Card';

import { shallow } from 'enzyme';

it('render correctly Card component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
})