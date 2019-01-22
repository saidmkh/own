import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  ModalBackground,
  ModalBlock,
  ModalContainer,
  ModalTitleBlock,
  ModalTitleText,
  ModalFieldsBlock,
  ModalFooter,
  ModalLoginNav,
  ModalNavText,
  ModalNavLink,
  ModalButtonBlock,
  ModalBtn,
  ModalClose,
  ModalErrorBlock
} from '../../styles/modal_styles'

import {
  InputBlock,
  InputLabel,
  InputBottomBar,
  InputField,
} from '../../styles/input_styles'

import { LOGIN_TOGGLE, REGISTRATION_TOGGLE } from '../../actions/types'
import { modalToggle } from '../../actions/modal'
import { signUpDispatch } from '../../actions/auth'
import { changeStateValue, modalClickOnBackground } from '../../_helpers/functions'

class SignUpModal extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      email: '',
      username: '',
      password: '',
      password_repeat: '',
      errors: {}
    }
    this.state = { ...this.initialState }

    this.formSubmit = this.formSubmit.bind(this)
  }

  resetState() {
    this.setState({ ...this.initialState })
  }

  goToLogin() {
    this.resetState()
    this.props.modalToggle(LOGIN_TOGGLE)
  }

  closeModal() {
    this.resetState()
    this.props.modalToggle(REGISTRATION_TOGGLE)
  }

  modalCloseOnBackground(e) {
    if (modalClickOnBackground(e)) {
      this.resetState()
      this.props.modalToggle(REGISTRATION_TOGGLE)
    }

    return false
  }

  formSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password_repeat: this.state.password_repeat
    }

    this.props.signUpDispatch(user)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  render() {
    const { email, username, password, password_repeat, errors } = this.state
    const { signUpModal, signInModal, verifyModal } = this.props
    if (signUpModal === true &&
      signUpModal !== signInModal &&
      signUpModal !== verifyModal) {
      return (
        <ModalBackground onClick={this.modalCloseOnBackground.bind(this)}>
          <ModalBlock>
            <ModalClose onClick={() => this.closeModal()} />
            <ModalContainer>
              <ModalTitleBlock>
                <ModalTitleText>Sign-up</ModalTitleText>
              </ModalTitleBlock>
              <form onSubmit={this.formSubmit}>
                <ModalFieldsBlock>
                  <InputBlock>
                    <InputField
                      type='text'
                      name='email'
                      value={email}
                      onChange={changeStateValue.bind(this)}
                      required
                    />
                    {errors.email && (
                      <ModalErrorBlock>{errors.email}</ModalErrorBlock>
                    )}
                    <InputBottomBar />
                    <InputLabel>Email</InputLabel>
                  </InputBlock>
                  <InputBlock>
                    <InputField
                      type='text'
                      name='username'
                      value={username}
                      onChange={changeStateValue.bind(this)}
                      required
                    />
                    {errors.username && (
                      <ModalErrorBlock>{errors.username}</ModalErrorBlock>
                    )}
                    <InputBottomBar />
                    <InputLabel>Username</InputLabel>
                  </InputBlock>
                  <InputBlock>
                    <InputField
                      type='password'
                      name='password'
                      value={password}
                      onChange={changeStateValue.bind(this)}
                      required
                    />
                    {errors.password && (
                      <ModalErrorBlock>{errors.password}</ModalErrorBlock>
                    )}
                    <InputBottomBar />
                    <InputLabel>Password</InputLabel>
                  </InputBlock>
                  <InputBlock>
                    <InputField
                      type='password'
                      name='password_repeat'
                      value={password_repeat}
                      onChange={changeStateValue.bind(this)}
                      required
                    />
                    {errors.password_repeat && (
                      <ModalErrorBlock>{errors.password_repeat}</ModalErrorBlock>
                    )}
                    <InputBottomBar />
                    <InputLabel>Repeat password</InputLabel>
                  </InputBlock>
                </ModalFieldsBlock>
                <ModalFooter>
                  <ModalLoginNav>
                    <ModalNavText>
                      Already have an account?
                    </ModalNavText>
                    <ModalNavLink
                      onClick={() => this.goToLogin()}
                    >Login</ModalNavLink>
                  </ModalLoginNav>
                  <ModalButtonBlock>
                    <ModalBtn type="submit">
                      Done
                  </ModalBtn>
                  </ModalButtonBlock>
                </ModalFooter>
              </form>
            </ModalContainer>
          </ModalBlock>
        </ModalBackground>
      )
    }
    return null
  }
}

export default connect(null, { modalToggle, signUpDispatch })(SignUpModal)
