const express = require('express')
const router = express.Router()
const controller = require('./CocukController')

router.get('/:id', controller.get)

router.get('/', controller.getAll)

router.post('/', controller.add)

module.exports = router