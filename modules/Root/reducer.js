export const initialState = {
  cardList: [],
  getTodoError: false,
  isRequesting: false
};

export const NAME = 'Root';

export const types = {
  SET_CARDS_LIST: `${NAME}/SET_CARDS_LIST`,
  CLEAR_CARD_DATA:`${NAME}/CLEAR_CARD_DATA`,
  SET_QUERY_PARAMETERS: `${NAME}/SET_QUERY_PARAMETERS`,
  GET_CARDS_DATA_REQUEST: `${NAME}/GET_CARDS_DATA_REQUEST`,
  GET_CARDS_DATA_SUCCESS: `${NAME}/GET_CARDS_DATA_SUCCESS`,
  GET_CARDS_DATA_FAILURE: `${NAME}/GET_CARDS_DATA_FAILURE`,
  SET_CARDS_DATA: `${NAME}/SET_CARDS_DATA`,
  SET_VISIBILITY_FILTER: `${NAME}/SET_VISIBILITY_FILTER`,
  TOGGLE_TODO: `${NAME}/TOGGLE_CARDS_ITEM`
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_QUERY_PARAMETERS:
      return {
        ...state,
        todoID: action.payload.todoID
      };

    case types.SET_CARDS_DATA:
    case types.CLEAR_CARD_DATA:
      return {
        ...initialState
      }
    case types.GET_CARDS_DATA_SUCCESS:
      return {
        ...state,
        cardList: action.payload,
        isRequesting: false
      };

    case types.GET_CARDS_DATA_REQUEST:
      return {
        ...state,
        isRequesting: true
      };

    case types.GET_CARDS_DATA_FAILURE:
      return {
        ...state,
        isRequesting: false,
        getTodoError: true
      };

    default:
      return { ...state
      }
  }
}

export const getTodoData = state => state[NAME].todoData;