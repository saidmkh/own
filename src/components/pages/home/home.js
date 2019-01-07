import React, { Component } from 'react'
import styled from 'styled-components'

import { Container } from '../../../styles/common_classes'
import {
  Banner,
  BannerBlock,
  BannerContainer
} from '../../../styles/banner_styles'

class HomePage extends Component {
  render() {
    return (
      <Banner home>
        <Container>
          <BannerBlock>
          </BannerBlock>
        </Container>
      </Banner>
    )
  }
}

export default HomePage