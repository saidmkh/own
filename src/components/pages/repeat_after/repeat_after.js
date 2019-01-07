import React, { Component } from 'react'
import styled from 'styled-components'

import { Container } from '../../../styles/common_classes'
import {
  Banner,
  BannerBlock,
  BannerContainer
} from '../../../styles/banner_styles'

class RepeatAfterPage extends Component {
  render() {
    return (
      <Banner repeat_after>
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

export default RepeatAfterPage