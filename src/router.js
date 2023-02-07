const express = require('express')
const router = express.Router()
const controller = require('./CocukController')

router.get('/', controller.add)

router.post('/', controller.register)

module.exports = router