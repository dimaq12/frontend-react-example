export const initialState = {
  card: {
    title: '',
    items: []
  },
  action: 'Add Card',
  isRequesting: false,
  error: ''
};

export const NAME = 'Card';

export const types = {
  GET_TODO_REQUEST: `${NAME}/GET_TODO_REQUEST`,
  CLEAR_CARD_STATE: `${NAME}/CLEAR_CARD_STATE`,
  SET_CARD_STATE: `${NAME}/SET_CARD_STATE`,
  SET_CARD_TITLE: `${NAME}/SET_CARD_TITLE`,
  SET_ERROR: `${NAME}/SET_ERROR`,
  REMOVE_ERROR: `${NAME}/REMOVE_ERROR`,
  ADD_TODO_REQUEST: `${NAME}/ADD_TODO_REQUEST`,
  ADD_TODO_SUCCESS: `${NAME}/ADD_TODO_SUCCESS`,
  ADD_TODO_FAILED: `${NAME}/ADD_TODO_FAILED`,
  EDIT_CARD_REQUEST: `${NAME}/EDIT_CARD_REQUEST`,
  EDIT_CARD_SUCCESS: `${NAME}/EDIT_CARD_SUCCESS`,
  EDIT_CARD_FAILED: `${NAME}/EDIT_CARD_FAILED`,
  DELETE_CARD_REQUEST: `${NAME}/DELETE_CARD_REQUEST`,
  DELETE_CARD_SUCCESS: `${NAME}/DELETE_CARD_SUCCESS`,
  DELETE_CARD_FAILED: `${NAME}/DELETE_CARD_FAILED`,
  ADD_CARD_ITEM_REQUEST: `${NAME}/ADD_CARD_ITEM_REQUEST`,
  ADD_CARD_ITEM_SUCCESS: `${NAME}/ADD_CARD_ITEM_SUCCESS`,
  ADD_CARD_ITEM_FAILED: `${NAME}/ADD_CARD_ITEM_FAILED`,
  CHANGE_CARD_ITEM_REQUEST: `${NAME}/CHANGE_CARD_ITEM_REQUEST`,
  CHANGE_CARD_ITEM_SUCCESS: `${NAME}/CHANGE_CARD_ITEM_SUCCESS`,
  CHANGE_CARD_ITEM_FAILED: `${NAME}/CHANGE_CARD_ITEM_FAILED`,
  DELETE_CARD_ITEM_REQUEST: `${NAME}/DELETE_CARD_ITEM_REQUEST`,
  DELETE_CARD_ITEM_SUCCESS: `${NAME}/DELETE_CARD_ITEM_SUCCESS`,
  DELETE_CARD_ITEM_FAILED: `${NAME}/DELETE_CARD_ITEM_FAILED`
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_TODO_REQUEST:
      return {
        ...state,
        card: action.payload,
        isRequesting: true,
        error: ''
      };
    case types.CLEAR_CARD_STATE:
      return {
        ...initialState
      };
    case types.ADD_TODO_REQUEST:
    case types.EDIT_CARD_REQUEST:
    case types.DELETE_CARD_REQUEST:
    case types.ADD_CARD_ITEM_REQUEST:
    case types.CHANGE_CARD_ITEM_REQUEST:
    case types.DELETE_CARD_ITEM_REQUEST:
      return {
        ...state,
        isRequesting: true
      }
    case types.ADD_TODO_FAILED:
    case types.EDIT_CARD_FAILED:
    case types.DELETE_CARD_FAILED:
    case types.ADD_CARD_ITEM_FAILED:
    case types.CHANGE_CARD_ITEM_FAILED:
    case types.DELETE_CARD_ITEM_FAILED:
      return {
        ...state,
        isRequesting: false
      }
    case types.ADD_TODO_SUCCESS:
      let cardWithItems = action.payload;
      cardWithItems.items = [];
      return {
        ...state,
        card: cardWithItems,
        action: 'Edit Card'
      }
    case types.DELETE_CARD_SUCCESS:
      return {
        ...state,
      }
    case types.EDIT_TODO_SUCCESS:
      return {
        ...state,
        card: action.payload,
      }
    case types.ADD_CARD_ITEM_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        card: {
          ...state.card,
          items: state.card.items.concat([action.payload])
        }
      }
    case types.CHANGE_CARD_ITEM_SUCCESS:
      return {
        ...state,
        isRequesting: true,
        card: {
          ...state.card,
          items: state.card.items.map((item) => {
            if (item.id === action.payload.id) {
              item = action.payload;
            }
            return item;
          })
        }
      }
    case types.DELETE_CARD_ITEM_SUCCESS:
      return {
        ...state,
        isRequesting: true,
        card: {
          ...state.card,
          items: state.card.items.filter((item) => {
            if (item.id == action.payload.itemId) {
              return false;
            }
            return true;
          })
        }
      };
    case types.SET_CARD_TITLE:
      return {
        ...state,
        card: {
          ...state.card,
          title: action.payload.title
        }
      };
    case types.SET_CARD_STATE:
      return {
        ...state,
        card: action.payload,
        action: 'Edit Card'
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    case types.REMOVE_ERROR:
      return {
        ...state,
        error: ''
      };
    default:
      return { ...state
      }
  }
}

export const getCurrentUser = state => state[NAME].User;