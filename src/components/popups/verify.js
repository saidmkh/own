import React, { Component } from 'react'

import { handleInputChange, closePopupOnClickBackground } from '../../services/helpers/functions'

export default class SignInPopup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      verify_code: ''
    }
  }

  closePopup(e) {
    closePopupOnClickBackground('VERIFY', e)
  }

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
                    required
                    placeholder="Verification code"
                    min='3'
                    value={this.state.verify_code}
                    onChange={handleInputChange.bind(this)}
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

