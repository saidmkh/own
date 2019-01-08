import styled from 'styled-components'

import { BannerAnimation } from './keyframes'

export const Banner = styled.div`
  height: 100vh;
  background-size: 300% 300%;
  animation: 20s ${BannerAnimation} linear infinite;
  background-image: ${props =>
    props.home ? 'linear-gradient(250deg, #08f6b9, #f608c8)' :
      props.caesar_cipher ? 'linear-gradient(250deg, #200122, #6f0000)' :
        props.movies ? 'linear-gradient(250deg, #abbaab, #ffffff)' :
          props.repeat_after ? 'linear-gradient(250deg, #ECE9E6, #FFFFFF)' :
            props.word_counter ? 'linear-gradient(250deg, #b967eb, #3c94f2)' :
              null
  };
`

export const BannerBlock = styled.div`
  padding: 0 0 2rem;
`

export const BannerContainer = styled.div`
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
`