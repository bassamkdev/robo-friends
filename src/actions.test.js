import * as actions from './actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const mockStore = configureMockStore([thunk])

describe('setSearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'abc'
        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

describe('requestRobots', () => {
    beforeEach(function () {
        moxios.install();
    });
    afterEach(function () {
        moxios.uninstall();
    })

    it('generates request and successfuly fetching robots', () => {
        const mockRobots = {
            id: '123',
            name: 'test',
            email: 'test@gmail.com'
        }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { mockRobots }
            })
        })
        const expectedActions = [
            { type: REQUEST_ROBOTS_PENDING },
            {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: { mockRobots }   
            }
        ]
        const store = mockStore();
        return store.dispatch(actions.requestRobots())
        .then( () => expect(store.getActions()).toEqual(expectedActions) )
    })
    it('generates request and failes fetching robots', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({status: 422})
        })
        const expectedActions = [
            { type: REQUEST_ROBOTS_PENDING },
            {
                type: REQUEST_ROBOTS_FAILED,
                payload: new Error('Request failed with status code 422')
            }
        ]
        const store = mockStore();
        return store.dispatch(actions.requestRobots())
        .then( () => expect(store.getActions()).toEqual(expectedActions) )
    })
})