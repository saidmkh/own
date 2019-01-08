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

class SignInModal extends Component {
  render() {
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
                  <ModalNavLink>Register</ModalNavLink>
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

export default SignInModal
