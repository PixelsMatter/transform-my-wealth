
// Libraries
import React from 'react'
import AddToMailchimp from 'gatsby-plugin-mailchimp'
import { navigate } from 'gatsby'

// Components
import Container from './Container'

class SignUpModal extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false,
			firstName: null,
			email: null,
			success: false,
			loading: false,
			error: null,
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		event.preventDefault()

		const fieldTarget = event.target,
		fieldName = fieldTarget.name,
		fieldValue = fieldTarget.value

		this.setState({
			[fieldName]: fieldValue
		})
	}

	handleSubmit(event) {
		event.preventDefault()

		this.setState({
			loading : true,
			error: null,
		})

		AddToMailchimp(this.state.email, {
			FNAME: this.state.firstName,
		}).then(response => {
			this.setState({'loading' : false})

			console.log(response)

			if(response.result === 'success') {
				this.setState({'success' : true})

				return navigate('/video-content')
			}
			else {
				this.setState({error: true})
			}
		})
	}

	render() {
		return (
			<>
				{this.state.open &&
					<div className='sign-up-modal'>
						<Container>
							<div className='sign-up-modal__inner'>
								<button aria-label='Close popup' title='Close popup' className='sign-up-modal__close'
										onClick={this.setState({open: false})}></button>

								<h3>To Watch The Video Masterclass Enter Your Name And Email Here:</h3>
								<form onSubmit={this.handleSubmit} className='sign-up-modal__form'>
									<input type='text' name='firstName' required placeholder='First Name*'
										   disabled={this.state.loading} onChange={this.handleChange}
										   className='sign-up-modal__input'/>
									<input type='email' name='email' required placeholder='Email*'
										   disabled={this.state.loading} onChange={this.handleChange}
										   className='sign-up-modal__input'/>
									<button type='submit' disabled={this.state.loading}
											className='btn btn--no-icon sign-up-modal__submit'>Sign Up
									</button>

									{this.state.error &&
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
			</>
		)
	}
}

export default SignUpModal
