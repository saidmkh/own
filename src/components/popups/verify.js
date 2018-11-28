import React, { Component } from 'react'

export default class SignInPopup extends Component {
  render() {
    return (
      <div className="popup-background full-absolute">
        <div className="popup">
          <div className="popup-container">
            <form className="popup__block">
              <div className="popup-title_block">
                <span className="popup-title_value">Verify your email</span>
              </div>
              <div className="popup-fields__block">
                <div className="input-label_block">
                  <input
                    type="text"
                    className="login-input"
                    required={true}
                    placeholder="Verification code"
                    min='3'
                    value=""
                  />
                </div>
              </div>
              <div className="popup-footer">
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

