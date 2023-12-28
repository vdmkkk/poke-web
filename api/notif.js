const Router = require('express')
const router = new Router()
const kassaController = require('./notif.controller')

router.get('/kassa/notif', kassaController.notif)
router.get('/kassa/get', kassaController.getData)
router.get('/kassa/success', kassaController.success)
router.get('/kassa/fail', kassaController.failure)
router.get('/kassa/generate', kassaController.generate)

module.exports = router