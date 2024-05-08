const router = require('express').Router()
const validInfo = require('../middleware/validInfo')
const { verifyToken } = require('../middleware/authorize')

const { 
    registerHandler, loginHandler, verifyHandler 
} = require('../controller/auth.controller')


router.post('/register', validInfo, registerHandler)
router.post('/login', validInfo, loginHandler)
router.post('/verify', verifyToken, verifyHandler)

module.exports = router