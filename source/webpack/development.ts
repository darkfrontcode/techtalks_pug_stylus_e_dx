import * as express 			from 'express'
import * as path 				from 'path'
import * as webpack 			from 'webpack'
import * as HtmlWebpackPlugin	from 'html-webpack-plugin'
import * as merge  				from 'webpack-merge'
import * as copy 				from 'copy-webpack-plugin'
import common					from './common'

const polyfill = 'eventsource-polyfill'
const hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true'

Object.keys(common.entry).forEach(function (name, i) {
	var extras = i === 0 ? [polyfill, hotClient] : [hotClient]
	common.entry[name] = extras.concat(common.entry[name])
})

export default merge(common, <any>{

	output: {

		path: path.join(__dirname, '../../public'),
		publicPath: 'http://localhost:3000/',
		filename: "[name].js"

	},

	devtool: "cheap-module-eval-source-map",

	plugins: [

		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
			}
		}),

		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			environment: process.env.NODE_ENV || 'development',
			template: path.join(__dirname, "../pug/template.pug"),
			filename: 'index.html',
			inject: true
		}),

		new copy([
			{
				from: path.join(__dirname, '../assets'), 
				to: path.join(__dirname, '../../public/assets')
			}
		])

	]

})