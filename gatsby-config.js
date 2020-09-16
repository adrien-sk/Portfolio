module.exports = {
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto\:100,300,400,500,700,900` // you can also specify font weights and styles
				],
				display: 'swap'
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			}
		}
	],
}
