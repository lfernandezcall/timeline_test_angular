const express = require('express')
const router = express.Router()

const getData = require('./handlers/getData')

router.get('/', getData)

module.exports = router