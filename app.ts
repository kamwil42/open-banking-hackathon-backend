import * as express from 'express'
import { Request, Response } from 'express'
import { createConnection, useContainer } from 'typeorm'
import bodyParser = require('body-parser')
import { Container } from 'typedi'

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
useContainer(Container)
createConnection().then(connection => {
  app.listen(port, () => console.log('Server starting at port 3000'))
})