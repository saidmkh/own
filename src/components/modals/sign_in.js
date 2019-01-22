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

import { REGISTRATION_TOGGLE, LOGIN_TOGGLE } from '../../actions/types'
import { modalToggle } from '../../actions/modal'
import { signInDispatch } from '../../actions/auth'
import { changeStateValue, modalClickOnBackground } from '../../_helpers/functions'

class SignInModal extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      email: '',
      password: '',
      errors: {}
    }
    this.state = { ...this.initialState }

    this.formSubmit = this.formSubmit.bind(this)
  }

  resetState() {
    this.setState({ ...this.initialState })
  }

  goToRegistration() {
    this.resetState()
    this.props.modalToggle(REGISTRATION_TOGGLE)
  }

  closeModal() {
    this.resetState()
    this.props.modalToggle(LOGIN_TOGGLE)
  }

  modalCloseOnBackground(e) {
    if (modalClickOnBackground(e)) {
      this.resetState()
      this.props.modalToggle(LOGIN_TOGGLE)
    }

    return false
  }

  formSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.signInDispatch(user)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  render() {
    const { email, password, errors } = this.state
    const { signInModal, signUpModal, verifyModal } = this.props
    if (signInModal === true &&
      signInModal !== signUpModal &&
      signInModal !== verifyModal) {
      return (
        <ModalBackground onClick={this.modalCloseOnBackground.bind(this)}>
          <ModalBlock>
            <ModalClose onClick={() => this.closeModal()} />
            <ModalContainer>
              <ModalTitleBlock>
                <ModalTitleText>Sign-in</ModalTitleText>
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
                </ModalFieldsBlock>
                <ModalFooter>
                  <ModalLoginNav>
                    <ModalNavText>
                      Don't have an account?
                    </ModalNavText>
                    <ModalNavLink
                      onClick={() => this.goToRegistration()}
                    >Register
                    </ModalNavLink>
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

export default connect(null, { modalToggle, signInDispatch })(SignInModal)
