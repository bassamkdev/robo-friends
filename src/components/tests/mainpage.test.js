import React from 'react';

import { shallow } from 'enzyme';

import MainPage from '../mainpage';


let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps } />)
})

it('render MainPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly with matching searchfield', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name:'john',
            email:'john@gmail.com'
        }],
        searchField: 'joh',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id:3,
        name:'john',
        email:'john@gmail.com'
    }]);
})
it('filters robots correctly with unmatching searchfield', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name:'john',
            email:'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper3 = shallow(<MainPage { ...mockProps3 } />)
    expect(wrapper3.instance().filterRobots()).toEqual([]);
})

it('renders correctly in pending state', () => {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name:'john',
            email:'john@gmail.com'
        }],
        searchField: 'a',
        isPending: true
    }
    const wrapper4 = shallow(<MainPage { ...mockProps4 } />)
    expect(wrapper4.find('[id="pending"]').length).toEqual(1);
})
