import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './RootReducer'

const store = createStore(
  reducer,
  window.__PRELOADED_STATE__, // for server side rendering
  composeWithDevTools(applyMiddleware(thunk, apiMiddleware)));

export default store
