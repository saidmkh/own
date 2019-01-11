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

import { modalToggle } from '../../actions/modal'
import { REGISTRATION_TOGGLE } from '../../actions/types'

class SignInModal extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      login: '',
      password: '',
    }
    this.state = { ...this.initialState }
  }

  resetState() {
    this.setState({...this.initialState})
  }

  goToRegistration() {
    this.resetState()
    this.props.modalToggle(REGISTRATION_TOGGLE)
  }

  render() {
    const { signInModal, signUpModal, verifyModal } = this.props
    if (signInModal === true &&
      signInModal !== signUpModal &&
      signInModal !== verifyModal) {
      return (
        <ModalBackground>
          <ModalBlock>
            <ModalClose />
            <ModalContainer>
              <ModalTitleBlock>
                <ModalTitleText>Sign-in</ModalTitleText>
              </ModalTitleBlock>
              <form>
                <ModalFieldsBlock>
                  <InputBlock>
                    <InputField type='text' required />
                    <InputBottomBar />
                    <InputLabel>Username or Email</InputLabel>
                  </InputBlock>
                  <InputBlock>
                    <InputField type='password' required />
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

const mapDispatchToProps = dispatch => ({
  modalToggle: RegToggle => dispatch(modalToggle(RegToggle))
})

export default connect(null, mapDispatchToProps)(SignInModal)
