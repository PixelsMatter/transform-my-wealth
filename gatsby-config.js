
module.exports = {
	siteMetadata: {
		title: `Transform My Wealth`,
		description: `Gatsby starter`,
		siteUrl: `https://transformmywealth.com`,
		humansTxt: `humans.txt`,
		openGraph: {
			type: `website`,
			title: `Transform My Wealth`,
			description: `How you can make more revenue online without wasting time or burning cash`,
			siteName: `Transform My Wealth`,
			url: `https://transformmywealth.com`,
		},
		twitterCard: {
			card: `summary_large_image`,
			title: `Transform My Wealth`,
			description: `How you can make more revenue online without wasting time or burning cash`,
			creator: '',
			site: '',
			domain: `transformmywealth.co.uk`,
			url: `https://transformmywealth.com`,
		},
	},
	plugins: [
		`gatsby-plugin-preact`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/img`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Transform My Wealth`,
				short_name: `TMB`,
				start_url: `/`,
				background_color: `#0E0417`,
				theme_color: `#0E0417`,
				display: `standalone`,
				icon: `src/img/favicon.png`,
				icon_options: {
					purpose: `any maskable`,
				},
			},
		},
  		{
    		resolve: `gatsby-plugin-sass`,
    		options: {
      			sassOptions: {
      				data: `@import "${__dirname}/src/scss/vendor/vendor";`,
					includePaths: [`node_modules`],
      			},
    		},
    	},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				usePreconnect: true,
				fonts: {
					google: [
						{
							family: `Poppins`,
							variants: [
								`100`,
								`200`,
								`300`,
								`400`,
								`500`,
								`600`,
								`700`,
							],
						},
					],
				},
			},
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://transformmywealth.us20.list-manage.com/subscribe/post?u=a1145212e07e588dd16f9ca98&amp;id=95871f36be',
				timeout: 3500,
			},
		},
	],
}