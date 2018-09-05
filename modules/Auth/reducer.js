export const initialState = {
  User: {},
  username: '',
  usernameError: false,
  email: '',
  emailError: false,
  password: '',
  passwordError: false,
  passwordConfirm: '',
  passwordConfirmError: false,
  error: '',
  isRequesting: false,
  token: '',
};

export const NAME = 'Auth';

export const types = {
  GET_USER_REQUEST: `${NAME}/GET_USER_REQUEST`,
  GET_USER_SUCCESS: `${NAME}/GET_USER_SUCCESS`,
  GET_USER_FAILURE: `${NAME}/GET_USER_FAILURE`,
  USER_LOGOUT: `${NAME}/USER_LOGOUT`,

  LOGIN_FORM_CHANGE: `${NAME}/LOGIN_FORM_CHANGE`,
  LOGIN_FORM_ERROR: `${NAME}/LOGIN_FORM_ERROR`
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        isRequesting: true,
        error: ''
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        User: action.payload,
        token: action.payload.token,
        isRequesting: false,
        error: ''
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload.response.error || action.payload.response.msg,
        isRequesting: false
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        User: {},
        token: '',
        username: '',
        email: '',
        password: '',
        isRequesting: false
      };
    case types.LOGIN_FORM_CHANGE:
    case types.LOGIN_FORM_ERROR:
      return {
        ...state,
        usernameError: false,
        emailError: false,
        passwordError: false,
        ...action.payload,
        isRequesting: false
      };
    default:
      return {...state}
  }
}

export const getCurrentUser = state => state[NAME].User;
