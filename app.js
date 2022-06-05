const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors');
const imageRoutes = require('./routes/recurso_imagen')
const textRoutes = require('./routes/recurso_texto')

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storages/imagenes`))
app.use('/api', imageRoutes)
app.use('/api/texto', textRoutes)
module.exports = app
