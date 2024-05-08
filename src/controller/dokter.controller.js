const {Dokter, Jadwal} = require('../models')

const getAllDokter = async(req, res) => {
    try {
        const dokter = await Dokter.findAll({
            include: {
                model: Jadwal,
                as: 'jadwal'
            }
        })

        res.status(200).json({
            message: 'success',
            data: {dokter}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const getDokterById = async(req, res) => {
    const {id} = req.params
    try {
        const dokter = await Dokter.findOne({
            where: {id: id},
            include: {
                model: Jadwal,
                as: 'jadwal'
            }
        })

        res.status(200).json({
            message: 'success',
            data: {dokter}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const addDokter = async(req, res) => {
    const {
        nama, umur, spesialis, gender, foto
    } = req.body

    try {
        const newDokter = await Dokter.create({
          nama, umur, spesialis, gender, foto
        })
        
        res.status(201).json({
            message: 'success add dokter',
            data: {newDokter}
        });
    } catch(err){
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const editDokter = async(req, res) => {
    const { id } = req.params;
    const { 
        nama, umur, spesialis, gender, foto
     } = req.body;
    
    try {
        const updateDokter = await Dokter.findOne({
            where: { 
                id: id
            },
        })
      
        if (!updateDokter) {
            return res.status(400).json({
                message: `Dokter dengan id ${id} tidak ditemukan`
            });
        }

        updateDokter.nama = nama
        updateDokter.umur = umur
        updateDokter.spesialis = spesialis
        updateDokter.gender = gender
        updateDokter.foto = foto
        const updateData = await updateDokter.save()
        
        return res.status(200).json({
            message:"Dokter was updated",
            data: {updateData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const deleteDokter = async(req, res) => {
    const {id} = req.params

    try {
        const deleteDokter = await Dokter.findOne({
            where: {id: id},
        })
    
        if (!deleteDokter) {
            return res.status(400).json({
                message:`Dokter dengan id ${id} tidak ditemukan`,
            });
        }
        const deleteData = await deleteDokter.destroy()
        return res.status(200).json({
            message:"Dokter was deleted",
            data: {deleteData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

module.exports = {
    getAllDokter,
    getDokterById,
    addDokter,
    deleteDokter,
    editDokter
}