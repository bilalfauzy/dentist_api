const router = require('express').Router()
const { 
    getAllDokter, 
    getDokterById, 
    addDokter, 
    editDokter, 
    deleteDokter 
} = require('../controller/dokter.controller')
const { verifyToken, adminOnly } = require('../middleware/authorize')


router.get('/', verifyToken, getAllDokter)
router.get('/:id', verifyToken, getDokterById)
router.post('/add', verifyToken, adminOnly, addDokter)
router.put('/edit:id', verifyToken, adminOnly, editDokter)
router.delete('/delete:id', verifyToken, adminOnly, deleteDokter)

module.exports = router