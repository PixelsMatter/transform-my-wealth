
// Libraries
import React from 'react'

// Components
import Container from './Container'

// Video
import Video from '../video/intro/feel-good-inc.mp4'

const Masterclass = () => (
	<section className='masterclass'>
		<Container>
			<h1 className='masterclass__heading'>How I built Transform My Poker</h1>
			<h2 className='masterclass__subheading'>*or how you can make more revenue online without wasting time or
				burning cash</h2>

			<video autoPlay muted loop className='masterclass__video'>
				<source src={Video} type="video/mp4"/>
			</video>

			<p>Enjoy this video masterclass designed to help your online business!</p>
			<p>To let me know what you think and what you'd like help with next hit reply to my emails.</p>
			<p>Thanks, <br/> Nick</p>
		</Container>
	</section>
)

export default Masterclass
