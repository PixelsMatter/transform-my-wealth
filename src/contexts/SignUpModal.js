
// Libraries
import * as React from 'react'
import { createContext } from 'react'

const SignUpModalContext = createContext({
	notification: null,
})

export class SignUpModalContextProvider extends React.Component {
	state = {
		open: false,
	}

	toggle = () => {
		const { open } = this.state

		this.setState({
			open: !open,
		})
	}

	render() {
		const { children } = this.props,
		{ open } = this.state

		return (
			<SignUpModalContext.Provider value={{
				open,
				toggle: this.toggle,
			}}>
				{children}
			</SignUpModalContext.Provider>
		)
	}
}

export default SignUpModalContext