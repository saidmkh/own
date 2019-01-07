import React, { Component } from 'react'
import styled from 'styled-components'

import { Container } from '../../styles/common_classes'

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
              <LoginButton>Login</LoginButton>
            </LoginBlock>
          </HeaderBlock>
        </Container>
      </HeaderContainer>
    )
  }
}

export default Header

