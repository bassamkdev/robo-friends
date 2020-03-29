import React from 'react';

import Scroll from '../Scroll';

import { shallow } from 'enzyme';

it('render correctly Scroll component', () => {
    const wrapper = shallow(<Scroll children={'childrenComponent'}/>);
    expect(wrapper).toMatchSnapshot();
})