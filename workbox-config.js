module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,ico,css,jpg,png,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};