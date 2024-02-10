const express = require('express')
const cors = require('cors')
const {test} = require('../controllers/authControllers')
const registerUser = require('../controllers/registerUser')
const loginUser = require('../controllers/loginUser')

const router = express.Router()


router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router