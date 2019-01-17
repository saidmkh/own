import API from 'axios'
import setToken from '../config/set_token'
import jwt_decode from 'jwt-decode'
import { modalToggle } from './modal'
import { GET_ERRORS, SET_CURRENT_USER, VERIFY_TOGGLE } from './types'

export const signUpDispatch = user => dispatch => {
  API.post('/sign-up', user)
    .then(res =>
      modalToggle(VERIFY_TOGGLE)
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const signInDispatch = user => dispatch => {
  API.post('/sign-in', user)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setToken(token)
      const decoded = jwt_decode(decoded)
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const verifyEmailDispatch = user => dispatch => {
  API('/verify-email', user)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setToken(token)
      const decoded = jwt_decode(decoded)
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
  localStorage.removeItem('jwtToken')
  setToken(false)
  dispatch(setCurrentUser({}))
}

export const setCurrentUser = decoded => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  })
}