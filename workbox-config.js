module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,ico,css,jpg,png,mp3,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};