import { combineReducers } from 'redux'

import errorReducer from './errors'
import authReducer from './auth'
import popupReducer from './popup'

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  popup: popupReducer
})