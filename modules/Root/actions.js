import { config } from '../../../../config'
import { types } from './reducer'
import { RSAA } from 'redux-api-middleware'
import { getToken } from '../../service'

const entryPoint = config.baseUrl;

export const actions = {
  clearCardData: () => ({type: types.CLEAR_CARD_DATA}),
  setQueryParameters: (data) => ({type: types.SET_QUERY_PARAMETERS, payload: data}),
  setTodoData: (data) => ({type: types.SET_CARDS_DATA, payload: data}),
  getCardList: () => ({
    [RSAA]: {
      types: [
        types.GET_CARDS_DATA_REQUEST,
        {
          type: types.GET_CARDS_DATA_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
              .then(cardList => {
                return cardList
              })
          }
        },
        types.GET_CARDS_DATA_FAILURE
      ],
      endpoint: `${entryPoint}/todos`,
      headers: {
        'Content-Type': 'application/json',
        'authorization' : 'Bearer ' + getToken()
      },
      method: 'GET'
    }
  }),
  /*openWidow: () => {
    return async (dispatch) => {
      // logic that open window
      const wnd = CommonService.openWindow();

      await CommonService.getWindowClose(wnd);

      //dispatch(actions.getTodoData());
      //dispatch(actions.getTodoData2());
    }
  }*/
};
