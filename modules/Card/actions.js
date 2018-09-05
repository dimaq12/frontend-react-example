import { config } from '../../../../config'
import { types } from './reducer'
import { RSAA } from 'redux-api-middleware'
import { getToken } from '../../service'


const entryPoint = config.baseUrl;

export const actions = {
    clearCardState: () => ({type: types.CLEAR_CARD_STATE}),
    setCardState: (data) => ({type: types.SET_CARD_STATE, payload: data}),
    setError: (error) => ({type: types.SET_ERROR, payload: {error}}),
    removeError: () => ({type: types.REMOVE_ERROR}),
    setTitle: (title) => {
      return {type: types.SET_CARD_TITLE, payload: {title}} 
    },
    saveCard: (title, id) => {
      return (dispatch) => {
        if(id){
          return dispatch(actions.editCard(id, {title}))
        }
        return dispatch(actions.addCard({title}));
      }
    },
    addCard: (patch) => ({
      [RSAA]: {
        types: [
          types.ADD_TODO_REQUEST,
          {
            type: types.ADD_TODO_SUCCESS,
            payload: (action, state, res) => {
              return res.json()
                .then(todo => {
                  return todo
                })
            }
          },
          types.ADD_TODO_FAILED
        ],
        headers: { 
          'Content-Type': 'application/json',
          'authorization' : 'Bearer ' + getToken()
        },
        endpoint: `${entryPoint}/todos`,
        body: JSON.stringify(patch),
        method: 'POST'
      }
    }),
    editCard: (cardId, patch) => ({[RSAA]: {
      types: [
        types.EDIT_CARD_REQUEST,
        {
          type: types.EDIT_CARD_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
              .then(todo => {
                return todo
              })
          }
        },
        types.EDIT_CARD_FAILED
      ],
      headers: { 
        'Content-Type': 'application/json',
        'authorization' : 'Bearer ' + getToken()
      },
      endpoint: `${entryPoint}/todos/${cardId}`,
      body: JSON.stringify(patch),
      method: 'PATCH'
    }}),
    deleteCard: (cardId) => ({[RSAA]: {
      types: [
        types.DELETE_CARD_REQUEST,
        {
          type: types.DELETE_CARD_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
              .then(todo => {
                return todo
              })
          }
        },
        types.DELETE_CARD_FAILED
      ],
      headers: { 
        'Content-Type': 'application/json',
        'authorization' : 'Bearer ' + getToken()
      },
      endpoint: `${entryPoint}/todos/${cardId}`,
      method: 'DELETE'
    }}),
    addItem: (cardId, name, status) => ({
      [RSAA]: {
        types: [
          types.ADD_CARD_ITEM_REQUEST,
          {
            type: types.ADD_CARD_ITEM_SUCCESS,
            payload: (action, state, res) => {
              return res.json()
                .then(todo => {
                  return todo
                })
            }
          },
          types.ADD_CARD_ITEM_FAILED
        ],
        headers: { 
          'Content-Type': 'application/json',
          'authorization' : 'Bearer ' + getToken()
        },
        endpoint: `${entryPoint}/todos/${cardId}/items`,
        body: JSON.stringify({
          todo_id: cardId,
          name: name,
          done: status
        }),
        method: 'POST'
      }
    }),
    editItem: (cardId, itemId, patch) => ({
      [RSAA]: {
        types: [
          types.CHANGE_CARD_ITEM_REQUEST,
          {
            type: types.CHANGE_CARD_ITEM_SUCCESS,
            payload: (action, state, res) => {
              return res.json()
                .then(todo => {
                  return todo
                })
            }
          },
          types.CHANGE_CARD_ITEM_FAILED
        ],
        headers: { 
          'Content-Type': 'application/json',
          'authorization' : 'Bearer ' + getToken()
        },
        endpoint: `${entryPoint}/todos/${cardId}/items/${itemId}`,
        body: JSON.stringify(patch),
        method: 'PATCH',
      }
    }),
    removeItem: (cardId, itemId) => ({
      [RSAA]: {
        types: [
          types.DELETE_CARD_ITEM_REQUEST,
          {
            type: types.DELETE_CARD_ITEM_SUCCESS,
            payload: (action, state, res) => {
              return res.json()
                .then(todo => {
                  return {itemId}
                })
            }
          },
          types.DELETE_CARD_ITEM_FAILED
        ],
        headers: { 
          'Content-Type': 'application/json',
          'authorization' : 'Bearer ' + getToken()
        },
        endpoint: `${entryPoint}/todos/${cardId}/items/${itemId}`,
        method: 'DELETE'
      }
    }),
};
