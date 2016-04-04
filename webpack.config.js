module.exports = {
	devtool: 'eval-source-map',
	entry: "./src/components/Main.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
		      test: /\.css$/,
		      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
		    },
		    { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      		{ test: /\.css$/, loader: 'style-loader!css-loader' }
		]
	}
}