const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3001

const routerRestData = require('./routes/rest')

app.use(express.static('client/public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/rest', routerRestData)

app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`))
