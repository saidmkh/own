import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const ModalBlock = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  background-color: white;
  border-radius: 4px;
`

export const ModalContainer = styled.div`
  width: 100%;
  padding: 4rem;
`

export const ModalTitleBlock = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

export const ModalTitleText = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
`

export const ModalLoginNav = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalNavText = styled.div`
  font-size: 1.4rem;
`

export const ModalNavLink = styled.div`
  margin-left: 3px;
  font-size: 1.6rem;
  color: lightskyblue;
  font-weight: bold;
  cursor: pointer;
`

export const ModalButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`

export const ModalFieldsBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalFooter = styled.div`
  
`

export const ModalBtn = styled.button`
  padding: 1.2rem 5rem;
  background-color: lightskyblue;
  border: 1px solid lightskyblue;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.22px;
  text-transform: uppercase;
  color: white;
  border-radius: 3rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: lightskyblue;
  }
`
export const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  user-select: none;
  cursor: pointer;

  &:hover::after {
    font-size: 3.2rem;
  }

  &:after {
    content: '\00d7';
    font-size: 2.8rem;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -2px;
    transition: all 0.2s ease;
  }
`