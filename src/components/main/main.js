import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from '../header/header'
import SignUpModal from '../modals/sign_up'
import Slider from '../slider/slider'
import HomePage from '../pages/home/home'
import MoviesPage from '../pages/new_movies/new_movies'
import CaesarPage from '../pages/caesar_cipher/caesar_cipher'
import RepeatAfterPage from '../pages/repeat_after/repeat_after'
import WordCounterPage from '../pages/word_counter/word_counter'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

class Main extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SignUpModal />
        <Wrapper>
          <Route component={Header} />
          <section id="slider">
            <Route component={Slider} />
          </section>
          <section id='page'>
            <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route path={'/new-movies/'} component={MoviesPage} />
              <Route path={'/repeat-after-me/'} component={RepeatAfterPage} />
              <Route path={'/caesar-cipher/'} component={CaesarPage} />
              <Route path={'/word-counter/'} component={WordCounterPage} />
            </Switch>
          </section>
        </Wrapper>
      </div>
    )
  }
}

export default Main