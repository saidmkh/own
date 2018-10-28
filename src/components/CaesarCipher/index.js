import React from 'react'

import CaesarCipherBanner from './CaesarCipherBanner'
import CaesarCipherContent from './CaesarContent'
import Slider from '../banner/slider/slider'

export default function CaesarCipher() {
	return (
		<div>
			<div className="banner caesar-banner">
				<CaesarCipherBanner />
				<Slider />
			</div>
			<CaesarCipherContent />
		</div>
	)
}
