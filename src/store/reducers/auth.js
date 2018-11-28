import { SET_CURRENT_USER } from '../constants'
import isEmpty from '../../services/helpers/isEmpty'

const initialState = {
  isLogged: false,
  user: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isLogged: !isEmpty(action.payload),
        user: action.payload
      }
    default: return state
  }
}