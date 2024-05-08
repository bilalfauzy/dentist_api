const router = require('express').Router()
const { getAllUser, getUserById, editUser, deleteUser } = require('../controller/user.controller')
const { verifyToken, adminOnly } = require('../middleware/authorize')


router.get('/', verifyToken, adminOnly, getAllUser)
router.get('/:id', verifyToken, getUserById)
router.put('/edit:id', verifyToken, editUser)
router.delete('/delete:id', verifyToken, deleteUser)

module.exports = router