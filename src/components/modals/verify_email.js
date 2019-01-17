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

import { VERIFY_TOGGLE } from '../../actions/types'
import { modalToggle } from '../../actions/modal'
import { modalClickOnBackground } from '../../_helpers/functions'

class VerifyEmailModal extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      verify_code: ''
    }
    this.state = { ...this.initialState }
  }

  resetState() {
    this.setState({ ...this.initialState })
  }

  closeModal() {
    this.resetState()
    this.props.modalToggle(VERIFY_TOGGLE)
  }

  modalCloseOnBackground(e) {
    if (modalClickOnBackground(e)) {
      this.resetState()
      this.props.modalToggle(VERIFY_TOGGLE)
    }

    return false
  }

  render() {
    const { verifyModal, signUpModal, signInModal } = this.props
    if (verifyModal === true &&
      verifyModal !== signInModal &&
      verifyModal !== signUpModal) {
      return (
        <ModalBackground onClick={this.modalCloseOnBackground.bind(this)}>
          <ModalBlock>
            <ModalClose onClick={() => this.closeModal()} />
            <ModalContainer>
              <ModalTitleBlock>
                <ModalTitleText>Verify your emal</ModalTitleText>
              </ModalTitleBlock>
              <form>
                <ModalFieldsBlock>
                  <InputBlock>
                    <InputField type='text' required />
                    <InputBottomBar />
                    <InputLabel>Verify code</InputLabel>
                  </InputBlock>
                </ModalFieldsBlock>
                <ModalFooter>
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

export default connect(null, { modalToggle })(VerifyEmailModal)
