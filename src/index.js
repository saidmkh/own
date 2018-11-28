import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'
import setToken from './services/config/setToken'
import './services/config/api'
import store from './store/store'
import { logoutDispatch, setCurrentUser } from './store/actions/auth'

import './styles/reset.css'
import './styles/App.css'

if (localStorage.Token) {
  setToken(localStorage.Token)
  const decoded = jwt_decode(localStorage.Token)
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000

  if (decoded.exp < currentTime) {
    store.dispatch(logoutDispatch())
    window.location.reload()
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
