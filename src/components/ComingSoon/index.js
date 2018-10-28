import React from 'react'

import ComingSoonBanner from './ComingSoonBanner'
import ComingSoonContent from './ComingSoonContent'
import Slider from '../banner/slider/slider'

export default function ComingSoon() {
	return (
		<div>
			<div className="banner coming-soon-banner">
				<ComingSoonBanner />
				<Slider />
			</div>
			<ComingSoonContent />
		</div>
	)
}
