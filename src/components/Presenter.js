
// Libraries
import React from 'react'

// Components
import Container from './Container'

// Images
import imgPath from '../img/thumbnail.jpg'

const Presenter = () => (
	<section className='presenter'>
		<Container>
			<h2>Your Masterclass Presenter</h2>
			<img src={imgPath} alt='Headshot of Nick Wealthall' className='presenter__img'/>
			<p><a href='https://www.nickwealthall.com' target='_blank' rel='noreferrer'>Nick Wealthall</a> founded and grew Transform My Poker to a 7 figure business selling to customers in over 60 countries.</p>
			<p>He now trains, coaches and advises some of the biggest businesses in the UK including Savills plc, St. James' Place and Willis Towers Watson and many more.</p>
		</Container>
	</section>
)

export default Presenter
