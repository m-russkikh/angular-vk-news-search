module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: __dirname,
		filename: "./build/bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015'],
				}
			},
			{
				test: /\.(woff|eot|ttf|svg)$/,
				loaders: [
					'file-loader?name=[path][name].[ext]'
				]
			}
		],
	},
	devtool: "source-map"
};