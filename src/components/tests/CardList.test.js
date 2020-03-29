import React from 'react';

import CardList from '../CardList';

import { shallow } from 'enzyme';

it('render correctly Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John snow',
            email: 'john@gmail.com'
        }
    ]
    const wrapper = shallow(<CardList robots={mockRobots}/>);
    expect(wrapper).toMatchSnapshot();
})