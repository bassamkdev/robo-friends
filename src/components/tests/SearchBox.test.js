import React from 'react';

import SearchBox from '../SearchBox';

import { shallow } from 'enzyme';

it('render correctly SearchBox component', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<SearchBox searchChange={mockFunction} />);
    expect(wrapper).toMatchSnapshot();
})