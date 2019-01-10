import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from '../header/header'
import SignUpModal from '../modals/sign_up'
import SignInModal from '../modals/sign_in'
import VerifyModal from '../modals/verify_email'
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
  ${props => props.blur ? 'filter: blur(3px)' : null}
`

class Main extends Component {
  render() {
    const { signUpModal, signInModal, verifyModal } = this.props
    let popupOpen = signUpModal || signInModal || verifyModal ? true : false
    return (
      <div className="app-wrapper">
        <SignInModal
          signInModal={signInModal}
          signUpModal={signUpModal}
          verifyModal={verifyModal}
        />
        <SignUpModal
          signInModal={signInModal}
          signUpModal={signUpModal}
          verifyModal={verifyModal}
        />
        <VerifyModal
          signInModal={signInModal}
          signUpModal={signUpModal}
          verifyModal={verifyModal}
        />
        <Wrapper blur={popupOpen ? true : false}>
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

const mapStateToProps = store => ({
  signUpModal: store.modal.signUpModal,
  signInModal: store.modal.signInModal,
  verifyModal: store.modal.verifyModal,
})

export default withRouter(connect(mapStateToProps)(Main))