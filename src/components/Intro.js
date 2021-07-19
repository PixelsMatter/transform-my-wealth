
// Libraries
import React, { useContext } from 'react'

// Components
import Container from './Container'

// Video
import Video from '../video/intro/feel-good-inc.mp4'

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
				<video autoPlay muted loop className="intro__video">
					<source src={Video} type="video/mp4"/>
				</video>

				<div className='intro__copy'>
					<h1 className='intro__heading'>How I built Transform My Poker</h1>
					<h2 className='intro__subheading'>*or how you can make more revenue online without wasting time or
						burning cash</h2>
					<button onClick={toggleModal} className='btn'>Show Me The Video</button>
				</div>
			</Container>
		</section>
	)
}

