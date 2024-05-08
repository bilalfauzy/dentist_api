const router = require('express').Router()
const { 
    getAllJadwal, 
    getJadwalById, 
    addJadwal, 
    editJadwal, 
    deleteJadwal 
} = require('../controller/jadwal.controller')
const { verifyToken, adminOnly } = require('../middleware/authorize')


router.get('/', verifyToken, getAllJadwal)
router.get('/:id', verifyToken, getJadwalById)
router.post('/add', verifyToken, adminOnly, addJadwal)
router.put('/edit:id', verifyToken, adminOnly, editJadwal)
router.delete('/delete:id', verifyToken, adminOnly, deleteJadwal)

module.exports = router