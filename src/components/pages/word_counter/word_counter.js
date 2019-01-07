import React, { Component } from 'react'
import styled from 'styled-components'

import { Container } from '../../../styles/common_classes'
import {
  Banner,
  BannerBlock,
  BannerContainer
} from '../../../styles/banner_styles'

class WordCounterPage extends Component {
  render() {
    return (
      <Banner word_counter>
        <Container>
          <BannerBlock>
            <BannerContainer>
            </BannerContainer>
          </BannerBlock>
        </Container>
      </Banner>
    )
  }
}

export default WordCounterPage