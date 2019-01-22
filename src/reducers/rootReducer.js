import { combineReducers } from 'redux'

import modalReducer from './modalReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  errors: errorReducer,
})