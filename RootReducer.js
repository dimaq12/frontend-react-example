import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as rootReducer, NAME as ROOT_NAME } from './modules/Root'
import { reducer as authReducer, NAME as AUTH_NAME } from './modules/Auth'
import { reducer as cardReducer, NAME as CARD_NAME } from './modules/Card'


const appReducer = combineReducers({
  form: formReducer,
  [ROOT_NAME]: rootReducer,
  [AUTH_NAME]: authReducer,
  [CARD_NAME]: cardReducer,
  // [SOME_OTHER_NAME]: someOtherComponentReducer
});

export default appReducer
