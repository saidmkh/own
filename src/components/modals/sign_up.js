import React, { Component } from 'react'

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

class SignUpModal extends Component {
  render() {
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
                  <ModalNavLink>Login</ModalNavLink>
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
}

export default SignUpModal
