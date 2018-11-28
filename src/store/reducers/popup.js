import { LOGIN_TOGGLE, REGISTER_TOGGLE, VERIFY_TOGGLE } from '../constants'

const initialState = {
  loginPopup: false,
  registerPopup: false,
  verifyPopup: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_TOGGLE:
      return {
        ...state,
        ...{
          loginPopup: !state.loginPopup,
          registerPopup: false,
          verifyPopup: false
        }
      }
    case REGISTER_TOGGLE:
    console.log('reg')
      return {
        ...state,
        ...{
          registerPopup: !state.registerPopup,
          loginPopup: false,
          verifyPopup: false
        }
      }
    case VERIFY_TOGGLE:
      return {
        ...state,
        ...{
          verifyPopup: !state.verifyPopup,
          registerPopup: false,
          loginPopup: false
        }
      }
    default: return state
  }
}