
// Libraries
import React, {useContext} from 'react'

// Components
import Container from './Container'

// Context
import SignUpModalContext from '../contexts/SignUpModal'

export default function Benefits() {
	const { toggle } = useContext(SignUpModalContext)

	const toggleModal = () => {
		toggle()
	}

	return (
		<section className='benefits'>
			<Container>
				<h2 className='benefits__heading'>In This Video Masterclass You'll Discover:</h2>
				<ul className='benefits__list'>
					<li className='benefits__list-item'>The thinking mistake that costs entrepreneurs thousands that you can
						avoid
					</li>
					<li className='benefits__list-item'>The biggest underused online asset that you can turn into an engine
						of revenue
					</li>
					<li className='benefits__list-item'>A HUGE shortcut to online partnerships that can turbo charge your
						growth guide to a huge shortcut to online partnerships that can get you turbo charged growth
					</li>
					<li className='benefits__list-item'>A step-by-step guide to PASSIVE recurring revenue for your business
						so you can reduce your stress and increase your income
					</li>
				</ul>
				<p className='benefits__para'><strong>And lots LOTS more!</strong></p>
				<p className='benefits__para'><strong>This is a unique chance to learn what really works online.</strong>
				</p>
				<p className='spaced'><strong>Click here to watch the video masterclass:</strong></p>
				<button onClick={toggleModal} className='btn'>Show Me The Video</button>
			</Container>
		</section>
	)
}