const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	// Do not expose data to dev tools, but use for error stack traces
	// Use source map to expose code, so it's possible to debug
	devtool: 'hidden-source-map',
	output: {
		sourceMapFilename: "[name].js.map"
	},
	optimization: {
		minimizer: [new UglifyJsPlugin({
			extractComments: 'all',
			sourceMap: true
		})],
	  },
});