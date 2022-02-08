const path = require('path');

module.exports = {
	entry: './app.ts',
	module: {
		rules: []
	},
	resolve: {
		extensions: ['.ts']
	},
	plugins: [	],
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'js'),
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	}
};