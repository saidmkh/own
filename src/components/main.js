import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './header/header'
import CaesarCipher from './CaesarCipher/index'
import WordCounter from './WordCounter/index'
import ComingSoon from './ComingSoon/index'
import Chat from './chat/index'

export default class Main extends Component {
	render() {
		return (
			<div className="wrapper">
				<Route component={Header} />
				<Route component={Chat} />
				<Switch>
					<Route exact path="/" component={CaesarCipher} />
					<Route exact path="/word-counter/" component={WordCounter} />
					<Route exact path="/coming-soon/" component={ComingSoon} />
				</Switch>
			</div>
		)
	}
}
