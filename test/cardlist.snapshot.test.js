
import renderer from 'react-test-renderer';
import React from 'react';
import {ItemList} from '../modules/Card/components/ItemList'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

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


describe('Todo component renders the todo correctly', () => {
  it('Cardlist renders correctly', () => {
    const store = mockStore(initialState)
    const itemList = [{name:'name', done: 'done'}]
    const rendered = renderer.create(
        <Provider store={store}>
            <ItemList itemList={itemList} />
        </Provider> 
    );
    expect(rendered.toJSON()).toMatchSnapshot()
  });
});