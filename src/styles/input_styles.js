import styled from 'styled-components'


export const InputBlock = styled.div`
  position: relative;
  margin-bottom: 3rem;
`

export const InputLabel = styled.label`
  pointer-events: none;
  color: #999;
  font-size: 1.6rem;
  position: absolute;
  left: 10px;
  top: 10px;
  transition: 0.2s ease all;
`

export const InputBottomBar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &::before, &::after {
    content: '';
    height: 2px; 
    width: 0;
    bottom: 1px; 
    position: absolute;
    background-color: lightskyblue; 
    transition: 0.2s ease all; 
  }

  &::before {
    left:50%;
  }

  &::after {
    right:50%; 
  }
`

export const InputField = styled.input`
  font-size: 1.6rem;
  padding: 1rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel},
  &:valid ~ ${InputLabel} {
    top: -18px;
    font-size: 1.4rem;
    color: lightskyblue;
  }
  
  &:focus ~ ${InputBottomBar}::before,
  &:focus ~ ${InputBottomBar}::after {
    width: 50%;
  }
`
