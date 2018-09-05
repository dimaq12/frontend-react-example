import { config } from '../../../../config'
import { types } from './reducer'
import { RSAA } from 'redux-api-middleware'

const entryPoint = config.baseUrl;

export const actions = {
  logout: () => {
    localStorage.removeItem('user');
    return { type: types.USER_LOGOUT }
  },

  loginFormChange: (field, value) => {
    return {type: types.LOGIN_FORM_CHANGE, payload: {[field]: value}}
  },

  showError: (type) => {
    return {type: types.LOGIN_FORM_ERROR, payload: {[type + 'Error']: true}}
  },

  getUserByToken: (token) => ({
    [RSAA]: {
      types: [
        types.GET_USER_REQUEST,
        {
          type: types.GET_USER_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
              .then(user => {
                if (user) {
                  return user
                }
              })
          }
        },
        types.GET_USER_FAILURE
      ],
      headers: { 
        'Content-Type': 'application/json',
        'authorization' : 'Bearer ' + token
      },
      endpoint: `${entryPoint}/auth/user`,
      method: 'GET'
    }
  }),

  login: (email, password) => ({
    [RSAA]: {
      types: [
        types.GET_USER_REQUEST,
        {
          type: types.GET_USER_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
              .then(user => {
                if (user && user.token) {
                  localStorage.setItem('user', user.token);
                }
                return user
              })
          }
        },
        types.GET_USER_FAILURE
      ],
      headers: { 'Content-Type': 'application/json' },
      endpoint: `${entryPoint}/auth/login`,
      body: JSON.stringify({
        email: email,
        password: password
      }),
      method: 'POST'
    }
  }),

  signup: (signupFields) => ({
    [RSAA]: {
      types: [
        types.GET_USER_REQUEST,
        {
          type: types.GET_USER_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
              .then(result => {
                localStorage.setItem('user', result.auth_token);
                return {token: result.auth_token}
              })
          }
        },
        types.GET_USER_FAILURE
      ],
      endpoint: `${entryPoint}/signup`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupFields),
      method: 'POST'
    }
  })
};
