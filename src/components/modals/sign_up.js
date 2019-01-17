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
  ModalClose
} from '../../styles/modal_styles'

import {
  InputBlock,
  InputLabel,
  InputBottomBar,
  InputField,
} from '../../styles/input_styles'

import { LOGIN_TOGGLE, REGISTRATION_TOGGLE } from '../../actions/types'
import { modalToggle } from '../../actions/modal'
import { modalClickOnBackground } from '../../_helpers/functions'

class SignUpModal extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      email: '',
      username: '',
      password: '',
      password_repeat: ''
    }
    this.state = { ...this.initialState }
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

  render() {
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
              <form>
                <ModalFieldsBlock>
                  <InputBlock>
                    <InputField type='text' required />
                    <InputBottomBar />
                    <InputLabel>Email</InputLabel>
                  </InputBlock>
                  <InputBlock>
                    <InputField type='text' required />
                    <InputBottomBar />
                    <InputLabel>Username</InputLabel>
                  </InputBlock>
                  <InputBlock>
                    <InputField type='password' required />
                    <InputBottomBar />
                    <InputLabel>Password</InputLabel>
                  </InputBlock>
                  <InputBlock>
                    <InputField type='password' required />
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

export default connect(null, { modalToggle })(SignUpModal)
