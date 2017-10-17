import { Application } 				from 'express'
import { Request as req } 			from 'express'
import { Response as res } 			from 'express'
import * as path 					from 'path'
import * as chalk 					from 'chalk'
import * as express 				from 'express'
import * as webpack 				from 'webpack'
import webpack_config 				from '../webpack/development'
import * as webpack_dev_middleware 	from 'webpack-dev-middleware'
import * as webpack_hot_middleware 	from 'webpack-hot-middleware'

/* ==========================================================================
	-- Utils
========================================================================== */

const port 				= process.env.PORT || 3000
const environment 		= process.env.NODE_ENV || 'development'
const log 				= console.log
const success 			= chalk.green

/* ==========================================================================
	-- Configs
========================================================================== */

const app : Application = express()
const webpack_compiler 	= webpack(webpack_config)

app.use(require('connect-history-api-fallback')())

/* ==========================================================================
	-- Webpack Hot Middleware
========================================================================== */

app.use(webpack_dev_middleware(webpack_compiler, <any>{
	stats: { colors: true },
	historyApiFallback: true,
	hot: true
}))
app.use(webpack_hot_middleware(webpack_compiler))

/* ==========================================================================
	-- Server
========================================================================== */

app.listen(port, () => {
	log(success(`Express server listening on port ${port} in ${environment} mode`))
})