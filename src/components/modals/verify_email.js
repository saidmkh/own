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
import { verifyEmailDispatch } from '../../actions/auth'
import { changeStateValue, modalClickOnBackground } from '../../_helpers/functions'

class VerifyEmailModal extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      verify_code: ''
    }
    this.state = { ...this.initialState }

    this.formSubmit = this.formSubmit.bind(this)
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

  formSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.props.user.email,
      verify_code: this.state.verify_code
    }

    this.props.verifyEmailDispatch(user)
  }

  render() {
    const { verify_code } = this.state
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
              <form onSubmit={this.formSubmit}>
                <ModalFieldsBlock>
                  <InputBlock>
                    <InputField
                      type='text'
                      name='verify_code'
                      value={verify_code}
                      onChange={changeStateValue.bind(this)}
                      required
                    />
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

const mapStateToProps = store => ({
  user: store.auth.user
})

export default connect(mapStateToProps, { modalToggle, verifyEmailDispatch })(VerifyEmailModal)
