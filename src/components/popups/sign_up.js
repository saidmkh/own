import React, { Component } from 'react'

import { handleInputChange, closePopupOnClickBackground } from '../../services/helpers/functions'

export default class SignUpPopup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      username: '',
      password: '',
      repeat_password: '',
      errors: {}
    }
  }

  closePopup(e) {
    closePopupOnClickBackground('REGISTER', e)
  }

  render() {
    const {email, username, password, repeat_password} = this.state
    return (
      <div className="popup-background full-absolute" onClick={this.closePopup.bind(this)}>
        <div className="popup">
          <div className="popup-container">
            <form className="popup__block">
              <div className="popup-title_block">
                <span className="popup-title_value">Sign-up</span>
              </div>
              <div className="popup-fields__block">
                <div className="input-label_block">
                  <label className="input-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="login-input"
                    required
                    placeholder="Enter email"
                    min='3'
                    value={email}
                    onChange={handleInputChange.bind(this)}
                  />
                </div>
                <div className="input-label_block">
                  <label className="input-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="login-input"
                    required
                    placeholder="Enter username"
                    min='3'
                    value={username}
                    onChange={handleInputChange.bind(this)}
                  />
                </div>
                <div className="input-label_block">
                  <label className="input-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="login-input"
                    required
                    min='6'
                    placeholder="Enter password"
                    value={password}
                    onChange={handleInputChange.bind(this)}
                  />
                </div>
                <div className="input-label_block">
                  <label className="input-label">Repeat password</label>
                  <input
                    type="password"
                    name="repeat_password"
                    className="login-input"
                    required
                    min='6'
                    placeholder="Repeat password"
                    value={repeat_password}
                    onChange={handleInputChange.bind(this)}
                  />
                </div>
              </div>
              <div className="popup-footer">
                <div className="login-popup--nav">
                  <div className="popup-nav__text">Already have an account?</div>
                  <span className="popup-nav-link">Login</span>
                </div>
                <div className="popup-button__block">
                  <button type="submit" className="popup-btn btn">Done</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

