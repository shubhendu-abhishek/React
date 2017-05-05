var path = require('path');

module.exports = {
	entry: './script.js',
	output: {
		path: path.resolve(__dirname,''),
		filename:'transpiled.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				query:{
					presets: ['es2015','react']
				}
			}
		]
	}
}