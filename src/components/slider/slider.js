import React, { Component } from 'react'
import styled from 'styled-components'

import { Container } from '../../styles/common_classes'
import { slider_items } from './slider_maps'
import SliderItem from './slider_item'

const SliderWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  z-index: 10;
`

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
`

class Slider extends Component {
  render() {
    return (
      <SliderWrapper>
        <Container>
          <SliderContainer>
            {slider_items.map((obj, idx) => {
              return (
                <SliderItem
                  key={idx}
                  obj={obj}
                />
              )
            })}
            {this.props.children}
          </SliderContainer>
        </Container>
      </SliderWrapper>
    )
  }
}

export default Slider
