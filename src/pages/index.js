
// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Intro from '../components/Intro'
import Benefits from '../components/Benefits'
import Presenter from '../components/Presenter'
import Testimonials from '../components/Testimonials'
import SignUpModal from '../components/SignUpModal'

const IndexPage = () => (
	<Layout>
		<SEO title='Transform My Wealth | Video Masterclass'/>
		<Intro/>
		<Benefits/>
		<Presenter/>
		<Testimonials/>
		<SignUpModal/>
	</Layout>
)

export default IndexPage
