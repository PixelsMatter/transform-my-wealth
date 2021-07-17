
// Libraries
import React from 'react'

// Components
import Container from './Container'

// Video
import Video from '../video/intro/feel-good-inc.mp4'

const Intro = () => (
	<section className='intro'>
		<Container>
			<div className='intro__copy'>
				<div className='intro__logo'>Transform My Business</div>
				<h1 className='intro__heading'>How you can make more revenue online without wasting time or burning cash</h1>
				<button className='btn'>Show Me The Video</button>
			</div>

			<video autoPlay muted loop className="intro__video">
				<source src={Video} type="video/mp4"/>
			</video>
		</Container>
	</section>
)

export default Intro
