/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-05 15:42:52
 * @version $Id$
 */

var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/app.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude:/node_modules/,
      loader: 'babel',
      query:
      {
        presets:['react','es2015']
      }
    },{
      test: /\.css$/,
      loader: 'style!css'
    },
  {
    test: /\.(png|jpg)$/,
    loader: 'url?limit=25000'
  }]
  }
	
}