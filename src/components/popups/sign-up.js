import React, { Component } from 'react'

export default class SignUpPopup extends Component {
  render() {
    return (
      <div className="popup-background full-absolute">
        <div className="popup">
          <div className="popup-container">
            <form className="popup__block">
              <div className="popup-title_block">
                <span className="popup-title_value">Sign-un</span>
              </div>
              <div className="popup-fields__block">
                <div className="input-label_block">
                  <label className="input-label">Email</label>
                  <input
                    type="email"
                    className="login-input"
                    required={true}
                    placeholder="Enter email/username"
                    min='3'
                    value=""
                  />
                </div>
                <div className="input-label_block">
                  <label className="input-label">Username</label>
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

