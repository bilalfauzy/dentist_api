const {Jadwal, Dokter} = require('../models')


const getAllJadwal = async(req, res) => {
    try {
        const jadwal = await Jadwal.findAll({
            include: {model: Dokter, as: 'dokter'}
        })
        res.status(200).json({
            message: 'success',
            data: jadwal 
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

//by id dokter
const getJadwalById = async(req, res) => {
    const {id} = req.params
    try {
        const jadwal = await Jadwal.findOne({
            where: {id: id},
            include: {
                model: Dokter,
                as: 'dokter'
            }
        })

        res.status(200).json({
            message: 'success',
            data: {jadwal}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const addJadwal = async(req, res) => {
    const {
        idDokter, hari, tanggal, jam, status
    } = req.body

    try {
        const newJadwal = await Jadwal.create({
            idDokter, hari, tanggal, jam, status
        })
        
        res.status(201).json({
            message: 'success add jadwal',
            data: {newJadwal}
        });
    } catch(err){
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const editJadwal = async(req, res) => {
    const { id } = req.params;
    const { 
        hari, tanggal, jam, status
     } = req.body;
    
    try {
        const updateJadwal = await Jadwal.findOne({
            where: { 
                id: id
            },
        })
      
        if (!updateJadwal) {
            return res.status(400).json({
                message: `Jadwal dengan id ${id} tidak ditemukan`
            });
        }

        updateJadwal.hari = hari
        updateJadwal.tanggal = tanggal
        updateJadwal.jam = jam
        updateJadwal.status = status
        const updateData = await updateJadwal.save()
        
        return res.status(200).json({
            message:"Jadwal was updated",
            data: {updateData} 
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const deleteJadwal = async(req, res) => {
    const {id} = req.params

    try {
        const deleteJadwal = await Jadwal.findOne({
            where: {id: id},
        })
    
        if (!deleteJadwal) {
            return res.status(400).json({
                message:`Jadwal dengan id ${id} tidak ditemukan`,
            });
        }
        const deleteData = await deleteJadwal.destroy()
        return res.status(200).json({
            message:"Jadwal was deleted",
            data: {deleteData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

module.exports = {
    getAllJadwal,
    getJadwalById,
    addJadwal,
    deleteJadwal,
    editJadwal
}