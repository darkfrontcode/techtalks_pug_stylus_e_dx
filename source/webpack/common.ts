import * as express 	from 'express'
import * as path 		from 'path'
import * as webpack 	from 'webpack'

export default <any>{
	
	entry: {

		app: path.join(__dirname, '../ts/index.ts')
		
	},

	module: {

		rules: [

			{
				test: /\.ts?$/,
				exclude: /node_modules|vue\/source/,
				use:[
					{
						loader: 'awesome-typescript-loader',
						options:{ appendTsSuffixTo: [/\.vue$/] }
					}
				],
			},
			{
				test: /\.vue$/,
				use:[
					{
						loader: 'vue-loader',
						options: { esModule: true }
					}
				]
			},
			{
				include: /\.pug/,
				use: ['pug-loader']
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{ 
						loader: 'css-loader', 
						options: { importLoaders: 1 }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true }
					},
					'stylus-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|ico|css|svg)$/,
				use: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: 'file-loader?name=fonts/[name].[ext]'
			}
		]

	},

	resolve: {

		extensions: ['.ts','.js','.pug','.styl'],
		alias: { 'vue$': 'vue/dist/vue.esm.js' }

	}

}