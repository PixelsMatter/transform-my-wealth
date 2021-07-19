
// Libraries
import React, { useContext } from 'react'

// Components
import Container from './Container'

// Context
import SignUpModalContext from '../contexts/SignUpModal'

export default function Intro() {
	const { toggle } = useContext(SignUpModalContext)

	const toggleModal = () => {
		toggle()
	}

	return (
		<section className='intro'>
			<Container>
				<div className='intro__video-wrap'>
					<iframe title='vimeo-player' src='https://player.vimeo.com/video/572651299' width='640' height='360' className='intro__video'></iframe>
				</div>

				<div className='intro__copy'>
					<h1 className='intro__heading'>How I built Transform My Poker</h1>
					<h2 className='intro__subheading'>*or how you can make more revenue online without wasting time or
						burning cash</h2>
					<p>To watch the full length video masterclass click below:</p>
					<button onClick={toggleModal} className='btn'>Show Me The Video</button>
				</div>
			</Container>
		</section>
	)
}

