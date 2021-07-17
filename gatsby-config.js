
module.exports = {
	siteMetadata: {
		title: `Transform My Business`,
		description: `Gatsby starter`,
		siteUrl: `https://transformybusiness.co.uk`,
		humansTxt: `humans.txt`,
		openGraph: {
			type: `website`,
			title: `Transform My Business`,
			description: `How you can make more revenue online without wasting time or burning cash`,
			siteName: `Transform My Business`,
			url: `https://transformybusiness.co.uk`,
		},
		twitterCard: {
			card: `summary_large_image`,
			title: `Transform My Business`,
			description: `How you can make more revenue online without wasting time or burning cash`,
			creator: '',
			site: '',
			domain: `transformybusiness.co.uk`,
			url: `https://transformybusiness.co.uk`,
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
				name: `Transform My Business`,
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
							family: `Montserrat`,
							variants: [
								`400`,
								`500`,
								`700`,
							],
						},
					],
				},
			},
		},
	],
}