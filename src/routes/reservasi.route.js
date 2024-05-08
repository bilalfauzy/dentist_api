const router = require('express').Router()
const { getAllReservasi, getReservasiById, addReservasi, deleteReservasi } = require('../controller/reservasi.controller')
const { verifyToken, adminOnly } = require('../middleware/authorize')


router.get('/', verifyToken, getAllReservasi)
router.get('/:id', verifyToken, getReservasiById)
router.post('/add', verifyToken, addReservasi)
router.delete('/delete:id', verifyToken, deleteReservasi)

module.exports = router