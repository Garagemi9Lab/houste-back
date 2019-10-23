import express from 'express'
import bodyParser from 'body-parser'
import '@babel/polyfill'
import cors from 'cors'
import errorhandler from 'errorhandler'
import morgan from 'morgan'
import chalk from 'chalk'
import { env, corsOptions } from './config'

import * as SwaggerUI from 'swagger-ui-express'
import SwaggerDocument from './config/Swagger'

import {
    web
} from './routers'




var app = express()

app.set('PORT', env.PORT)
app.use(cors(corsOptions))
app.use(bodyParser.json())

if (env.NODE_ENV === 'development') {
    app.use(errorhandler())
    app.use(morgan('combined'))
}

// Import and add Routers here. 
const BASE_PATH = '/api/v1'

app.use(`${BASE_PATH}/web`, web)

app.use(`${BASE_PATH}/swagger`, SwaggerUI.serve, SwaggerUI.setup(SwaggerDocument))

app.listen(app.get('PORT'), () => {
    /* eslint-disable no-console */
    console.log(`App is listening on port: ${chalk.cyanBright(app.get('PORT'))}`)
    console.log(`Environment: ${chalk.green(env.NODE_ENV)}`)
})