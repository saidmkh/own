import styled from 'styled-components'


export const InputBlock = styled.div`
  position: relative;
  margin-bottom: 3rem;
`

export const InputLabel = styled.label`
  pointer-events: none;
  color: #999;
  font-size: 1.8rem;
  position: absolute;
  left: 10px;
  top: 15px;
  transition: 0.2s ease all;
`

export const InputBottomBar = styled.span`
  position: relative;
  display: block;
  width: calc(100% + 20px);

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
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
    top: -15px;
    font-size: 1.4rem;
    color: #5264AE;
  }
  
  &:focus ~ ${InputBottomBar}&:before,
  &:focus ~ ${InputBottomBar}&:after {
    width: 50%;
  }
`
