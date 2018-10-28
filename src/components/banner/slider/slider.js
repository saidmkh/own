import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerSlider extends Component {
	constructor() {
		super()
		this.state = {
			slide_active: 'caesar_cipher'
		}
	}

	handleSlideClick = e => {
		this.setState({
			slide_active: e.currentTarget.name
		})
		console.log(this.state.slide_active)
	}

	render() {
		const { slide_active } = this.state
		return (
			<div className="banner-slider">
				<div className="banner-slider_container">
					<Link
						to="/"
						className="slider--item__mask"
						name="caesar_cipher"
						onClick={this.handleSlideClick}
					>
						<div className="slider--item-description">
							<div className="slider-description_title">
								<span className="slider-description_title__value">
									Caesar Cipher
								</span>
							</div>
							<div className="slider-description_description">
								<span className="slider-description_description__value">
									bla bla bla bla bla bla bla bla blabla bla blabla bla blabla
									bla bla
								</span>
							</div>
						</div>
						<div
							className={
								slide_active === 'caesar_cipher'
									? 'slide-active banner-slider--item caesar-slider--item'
									: 'banner-slider--item caesar-slider--item'
							}
						/>
					</Link>
					<Link
						to="/word-counter/"
						className="slider--item__mask"
						name="word_counter"
						onClick={this.handleSlideClick}
					>
						<div className="slider--item-description">
							<div className="slider-description_title">
								<span className="slider-description_title__value">
									Word Counter
								</span>
							</div>
							<div className="slider-description_description">
								<span className="slider-description_description__value">
									bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla
									bla bla bla bla bla bla bla bla
								</span>
							</div>
						</div>
						<div
							className={
								slide_active === 'word_counter'
									? 'slide-active banner-slider--item word_counter'
									: 'banner-slider--item word_counter'
							}
						/>
					</Link>
					<Link
						to="/coming-soon/"
						className="slider--item__mask"
						name="coming_soon"
						onClick={this.handleSlideClick}
					>
						<div className="slider--item-description">
							<div className="slider-description_title">
								<span className="slider-description_title__value">
									Coming soon
								</span>
							</div>
						</div>
						<div
							className={
								slide_active === 'coming_soon'
									? 'banner-slider--item coming_soon slide-active'
									: 'banner-slider--item coming_soon'
							}
						/>
					</Link>
					<Link
						to="/coming-soon/"
						className="slider--item__mask"
						name="coming_soon"
						onClick={this.handleSlideClick}
					>
						<div className="slider--item-description">
							<div className="slider-description_title">
								<span className="slider-description_title__value">
									Coming soon
								</span>
							</div>
						</div>
						<div
							className={
								slide_active === 'coming_soon'
									? 'banner-slider--item coming_soon slide-active'
									: 'banner-slider--item coming_soon'
							}
						/>
					</Link>
					<Link
						to="/coming-soon/"
						className="slider--item__mask"
						name="coming_soon"
						onClick={this.handleSlideClick}
					>
						<div className="slider--item-description">
							<div className="slider-description_title">
								<span className="slider-description_title__value">
									Coming soon
								</span>
							</div>
						</div>
						<div
							className={
								slide_active === 'coming_soon'
									? 'banner-slider--item coming_soon slide-active'
									: 'banner-slider--item coming_soon'
							}
						/>
					</Link>
				</div>
			</div>
		)
	}
}
