import React, { Component } from 'react'
import {connect} from 'react-redux'

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

import {LOGIN_TOGGLE} from '../../actions/types'
import {modalToggle} from '../../actions/modal'

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
    this.setState({...this.initialState})
  }

  goToLogin() {
    this.resetState()
    this.props.modalToggle(LOGIN_TOGGLE)
  }

  render() {
    if (this.props.signUpModal === true &&
      this.props.signUpModal !== this.props.signInModal &&
      this.props.signUpModal !== this.props.verifyModal) {
      return (
        <ModalBackground>
          <ModalBlock>
            <ModalClose />
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

const mapDispatchToProps = dispatch => ({
  modalToggle: LogToggle => dispatch(modalToggle(LogToggle))
})

export default connect(null, mapDispatchToProps)(SignUpModal)
