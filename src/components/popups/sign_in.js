import React, { Component } from 'react'

import { handleInputChange, closePopupOnClickBackground } from '../../services/helpers/functions'

class SignInPopup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: '',
      errors: {}
    }
  }

  closePopup(e) {
    closePopupOnClickBackground('REGISTER', e)
  }

  render() {
    return (
      <div className="popup-background full-absolute" onClick={this.closePopup.bind(this)}>
        <div className="popup">
          <div className="popup-container">
            <form className="popup__block">
              <div className="popup-title_block">
                <span className="popup-title_value">Sign-in</span>
              </div>
              <div className="popup-fields__block">
                <div className="input-label_block">
                  <label className="input-label">Username or email</label>
                  <input
                    type="text"
                    className="login-input"
                    required={true}
                    placeholder="Enter email/username"
                    min='3'
                    value=""
                  />
                </div>
                <div className="input-label_block">
                  <label className="input-label">Password</label>
                  <input
                    type="password"
                    className="login-input"
                    required={true}
                    min='6'
                    placeholder="Enter password"
                    value=""
                  />
                </div>
              </div>
              <div className="popup-footer">
                <div className="login-popup--nav">
                  <div className="popup-nav__text">Still don't have an account?</div>
                  <span className="popup-nav-link">Register</span>
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

export default SignInPopup