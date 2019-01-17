import { SET_CURRENT_USER } from '../actions/types'
import isEmpty from '../_helpers/isEmpty'

const initialState = {
  isLogged: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isLogged: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state
  }
}

export default authReducer