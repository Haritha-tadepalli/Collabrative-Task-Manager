const express = require('express')
const cors = require('cors')
const {test} = require('../controllers/authControllers')
const registerUser = require('../controllers/registerUser')
const loginUser = require('../controllers/loginUser')

const router = express.Router()


//middleware
router.use(
    cors({
        credential: true,
        origin: "http://localhost:3000"
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router