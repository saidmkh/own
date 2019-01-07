import React, { Component } from 'react'
import styled from 'styled-components'

import { Container } from '../../../styles/common_classes'
import {
  Banner,
  BannerBlock,
  BannerContainer
} from '../../../styles/banner_styles'

class MoviesPage extends Component {
  render() {
    return (
      <Banner movies>
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

export default MoviesPage