const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static('client/public'))

app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`))
