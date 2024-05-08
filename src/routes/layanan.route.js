const router = require('express').Router()
const { getAllLayanan, getLayananById, addLayanan, editLayanan, deleteLayanan } = require('../controller/layanan.controller')
const { verifyToken, adminOnly } = require('../middleware/authorize')


router.get('/', verifyToken, getAllLayanan)
router.get('/:id', verifyToken, getLayananById)
router.post('/add', verifyToken, adminOnly, addLayanan)
router.put('/edit:id', verifyToken, adminOnly, editLayanan)
router.delete('/delete:id', verifyToken, adminOnly, deleteLayanan)

module.exports = router