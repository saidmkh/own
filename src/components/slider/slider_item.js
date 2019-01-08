import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import CaesarCipherImgUrl from '../../assets/images/caesar-cipher.png'
import MoviesImgUrl from '../../assets/images/movies.png'
import RepeatAfterImgUrl from '../../assets/images/repeat-after-me.png'
import WordCounterImgUrl from '../../assets/images/word-counter.png'

const SliderBlock = styled.div`
  position: relative;
  width: 200px;
  height: 125px;
`

const SliderDescription = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.25s linear, opacity 0.25s linear;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .75);
  box-shadow: 0px 14px 20px -8px rgba(0, 0, 0, .75);
  padding: 1rem;
  margin: -3px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 11;
`

const SliderTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: white;
  font-weight: 600;
`

const SliderBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: all 1s;
  z-index: 0;
  background-image: ${props =>
    props.theme === 'caesar_cipher' ? `url(${CaesarCipherImgUrl})` :
      props.theme === 'new_movies' ? `url(${MoviesImgUrl})` :
        props.theme === 'repeat_after' ? `url(${RepeatAfterImgUrl})` :
          props.theme === 'word_counter' ? `url(${WordCounterImgUrl})` :
            null
  };
`

const activeClassName = 'active-slide'

const SliderItemWrapper = styled(NavLink).attrs({
  activeClassName
})`
  margin: 0 .5rem;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid black;
  padding: 3px;

  &:hover ${SliderDescription} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${SliderBackground} {
  transform: scale(1.2)
  }

  &.${activeClassName} {
    ${SliderDescription} {
      visibility: visible;
      opacity: 1;
    }
  }
`

export default function SliderItem(props) {
  console.log('d')
  return (
    <SliderItemWrapper
      to={`/${props.obj.nav}/`}
    >
      <SliderBlock>
        <SliderDescription>
          <SliderTitle>{props.obj.title}</SliderTitle>
        </SliderDescription>
        <SliderBackground theme={props.obj.props} />
      </SliderBlock>
    </SliderItemWrapper>
  )
}
