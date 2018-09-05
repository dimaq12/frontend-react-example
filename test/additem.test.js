import {AddItem} from '../modules/Card/components/AddItem'
import React from 'react'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

const addItem = jest.fn();
const getCardList = jest.fn();
const setError = jest.fn();
const removeError = jest.fn();

const wrapper = mount(<AddItem removeError={removeError} addItem={addItem} setError={setError} getCardList={getCardList}/>)

describe('Add item component testing',()=>{
    const btn = wrapper.find('button');
    const input = wrapper.find('input');
    btn.simulate('click');

    it('Error massage appear to click with empty field', () => {
        expect(wrapper.length).toEqual(1);
        expect(setError).toBeCalledWith(`Item title can't be empty!`);
    });
   
}) 