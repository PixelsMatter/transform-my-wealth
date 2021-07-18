
// Libraries
import React from 'react'

// Components
import Container from './Container'

const Testimonials = () => (
	<section className='benefits'>
		<Container>
			<h2 className='benefits__heading'>Here's Some Feedback From Nick's Recent Clients...</h2>
			<ul className='benefits__list'>
				<li className='benefits__list-item benefits__list-item--quote'>
					Having Nick as a coach over the past few months has been immensely useful helping me move into a senior leadership role.  I’d have no hesitation recommending Nick as a coach if you get the chance to work with him.
					<strong className='benefits__list-item__author'>Louise Dorrian, Director, Willis Towers Watson</strong>
				</li>
				<li className='benefits__list-item benefits__list-item--quote'>
					I have probably been on over a hundred ‘training days’ in my career so far, and this session training was far and away the best.
					<strong className='benefits__list-item__author'>Matthew Taylor, Thomas Legal</strong>
				</li>
				<li className='benefits__list-item benefits__list-item--quote'>
					Nick’s input has been instrumental to changing my mindset and my business and reigniting my enthusiasm for the challenge ahead. I would strongly recommend Nick’s services to anyone who is struggling and wants to grow their business.
					<strong className='benefits__list-item__author'>Mark Glanfield, Glanfield & Associates Wealth Management</strong>
				</li>
			</ul>
			<p className='spaced'><strong>Click here to watch the video masterclass:</strong></p>
			<button className='btn'>Show Me The Video</button>
		</Container>
	</section>
)

export default Testimonials
