import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'

import { logoutDispatch, setCurrentUser } from './actions/auth'
import store from './store/store'
import setToken from './config/set_token'
import './config/api'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  setCurrentUser(decoded)

  const currentTime = Date.now() / 1000

  if (decoded.exp < currentTime) {
    store.dispatch(logoutDispatch())
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

store.subscribe(() => store.getState());
serviceWorker.unregister();
