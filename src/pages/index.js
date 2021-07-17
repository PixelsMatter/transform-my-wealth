
// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Intro from '../components/Intro'
import Benefits from '../components/Benefits'
import Presenter from '../components/Presenter'


const IndexPage = () => (
	<Layout>
		<SEO title='Transform My Business | Video Masterclass'/>
		<Intro/>
		<Benefits/>
		<Presenter/>
	</Layout>
)

export default IndexPage
