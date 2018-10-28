import React from 'react'

import WordCountBanner from './WordCountBanner'
import WordCountContent from './WordCountContent'
import Slider from '../banner/slider/slider'

export default function WordCounter() {
	return (
		<div>
			<div className="banner word-counter-banner">
				<WordCountBanner />
				<Slider />
			</div>
			<WordCountContent />
		</div>
	)
}
