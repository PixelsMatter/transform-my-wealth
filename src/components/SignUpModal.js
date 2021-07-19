
// Libraries
import React, { useState, useContext } from 'react'
import AddToMailchimp from 'gatsby-plugin-mailchimp'
import { navigate } from 'gatsby'

// Components
import Container from './Container'

// Context
import SignUpModalContext from '../contexts/SignUpModal'

export default function SignUpModal() {
	const { toggle } = useContext(SignUpModalContext)
	const [ loading, setLoading ] = useState(false)
	const [ error, setError ] = useState(null)
	const [ success, setSuccess ] = useState(false)

	const toggleModal = () => {
		toggle()
	}

	const handleChange = (event) => {
		event.preventDefault()

		const fieldTarget = event.target,
		fieldName = fieldTarget.name,
		fieldValue = fieldTarget.value

		this.setState({
			[fieldName]: fieldValue
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		setLoading(true)
		setError(null)

		AddToMailchimp(this.state.email, {
			FNAME: this.state.firstName,
		}).then(response => {
			setLoading(false)

			if(response.result === 'success') {
				setSuccess(true)

				toggleModal()

				return navigate('/masterclass')
			}
			else {
				setError(true)
			}
		})
	}

	return (
		<div>
			<SignUpModalContext.Consumer>
				{value => (
					<div>
						{value.open &&
						<div className='sign-up-modal'>
							<Container>
								<div className='sign-up-modal__inner'>
									<button onClick={toggleModal} aria-label='Close popup' title='Close popup' className='sign-up-modal__close'></button>

									<h3>To Watch The Video Masterclass Enter Your Name And Email Here:</h3>
									<form onSubmit={handleSubmit} className='sign-up-modal__form'>
										<input type='text' name='firstName' required placeholder='First Name*'
											   disabled={loading} onChange={handleChange}
											   className='sign-up-modal__input'/>
										<input type='email' name='email' required placeholder='Email*'
											   disabled={loading} onChange={handleChange}
											   className='sign-up-modal__input'/>
										<button type='submit' disabled={loading}
												className='btn btn--no-icon sign-up-modal__submit'>Sign Up
										</button>

										{error &&
											<div className='error'>Error, please try again later.</div>
										}

										<small className='sign-up-modal__disclaimer'>By entering your email you're consenting to
											receive email updates and offers from me designed to
											help you grow your business. I will not sell, rent or distribute your email to any
											3rd party at
											any time and you can unsubscribe at any time.</small>
									</form>
								</div>
							</Container>
						</div>
						}
					</div>
				)}
			</SignUpModalContext.Consumer>
		</div>
	)
}

