import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Container } from '../../styles/common_classes'
import { LOGIN_TOGGLE } from '../../actions/types'
import { modalToggle } from '../../actions/modal'

const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
`

const HeaderBlock = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: flex-end;
`

const LoginBlock = styled.div`
  display: flex;
  align-items: center;
`

const LoginButton = styled.button`
  padding: 0.8rem 5rem 1rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 3rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Container>
          <HeaderBlock>
            <LoginBlock>
              <LoginButton
                onClick={() => this.props.modalToggle(LOGIN_TOGGLE)}>
                Login
              </LoginButton>
            </LoginBlock>
          </HeaderBlock>
        </Container>
      </HeaderContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  modalToggle: LogToggle => dispatch(modalToggle(LogToggle))
})

export default connect(null, mapDispatchToProps)(Header)

Header.propTypes = {
  modalToggle: PropTypes.func.isRequired
}

