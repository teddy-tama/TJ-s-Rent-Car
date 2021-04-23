const express = require('express')
const router = express.Router()
const registerController = require('../controllers/registerController.js')

router.get('/register', registerController.getRegister)
router.post('/register', registerController.postRegister)

module.exports = router