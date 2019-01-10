import { LOGIN_TOGGLE, REGISTRATION_TOGGLE, VERIFY_TOGGLE } from '../actions/types'

const initialState = {
  signUpModal: false,
  signInModal: false,
  verifyModal: false
}

const modalReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case LOGIN_TOGGLE:
      return {
        ...state,
        signInModal: !state.signInModal,
        signUpModal: false,
        verifyModal: false
      }
    case REGISTRATION_TOGGLE:
      return {
        ...state,
        signUpModal: !state.signUpModal,
        signInModal: false,
        verifyModal: false
      }
    case VERIFY_TOGGLE:
      return {
        ...state,
        verifyModal: !state.verifyModal,
        signUpModal: false,
        signInModal: false
      }
    default:
      return state
  }
}

export default modalReducer