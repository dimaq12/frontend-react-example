import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import ConnectedCard,{Card} from '../modules/Root/containers/Root'
import configureStore from 'redux-mock-store'
import { configure } from 'enzyme';
import {Provider} from 'react-redux'

import { actions as rootActions, NAME as ROOT_NAME } from '../modules/Root/actions'

import {MemoryRouter} from 'react-router'

configure({ adapter: new Adapter() });

const initialState = {
    Card:{
        card:{
            title: 'title'
        }
    },
    Auth: {
        User:{
        }
    }
}

const mockStore = configureStore()
let store, wrapper;

beforeEach(()=>{
    store = mockStore(initialState)
    wrapper = shallow(
    <Provider store={store}>
     <MemoryRouter>
        <ConnectedCard />
     </MemoryRouter>
    </Provider> )
})

describe('Card actions test',()=>{

    it('Render the connected card component', () => {
       expect(wrapper.find(ConnectedCard).length).toEqual(1)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(rootActions.clearCardData())
        store.dispatch(rootActions.setTodoData())
        action = store.getActions()
        expect(action[0].type).toBe("Root/CLEAR_CARD_DATA")
        expect(action[1].type).toBe("Root/SET_CARDS_DATA")
    });
});