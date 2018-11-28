import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SignInPopup from '../popups/sign_in'
import SignUpPopup from '../popups/sign_up'

import Header from '../header/header'
import Slider from '../slider/slider'

import HomePage from '../home_page/home_page'
import CaesarCipher from '../caesar_cipher/caesar_cipher'
import RepeatAfterMe from '../repeat_after_me/repeat_after_me'
import WordCounter from '../word_counter/word_counter'
import ComingSoon from '../coming_soon/coming_soon'

export default class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <SignInPopup />
        <Route component={Header} />
        <Route component={Slider} />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/caesar-cipher/'} component={CaesarCipher} />
          <Route exact path={'/repeat-after-me/'} component={RepeatAfterMe} />
          <Route exact path={'/word-counter/'} component={WordCounter} />
          <Route exact path={'/coming-soon/'} component={ComingSoon} />
        </Switch>
      </div>
    )
  }
}
