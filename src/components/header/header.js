import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header_block">
            <div className="login_block">
              <button className="login-btn btn">Login</button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
