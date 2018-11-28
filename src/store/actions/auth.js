import API from 'axios'
import setToken from '../../services/config/setToken'
import jwt_decode from 'jwt-decode'
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  VERIFY_TOGGLE
} from '../constants'
import { popupToggleDispatch } from './popup'

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const registerDispatch = user => dispatch => {
  API.post('/sign-up/', user)
    .then(res =>
      popupToggleDispatch(VERIFY_TOGGLE)
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const verifyDispatch = user => dispatch => {
  API.post('/verify-email/', user)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('Token', token)
      setToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const loginDispatch = user => dispatch => {
  API.post('/sign-in/', user)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('Token', token)
      setToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const logoutDispatch = () => dispatch => {
  localStorage.removeItem('Token')
  setToken(false)
  dispatch(setCurrentUser({}))
}