const {Layanan, Dokter} = require('../models')

const getAllLayanan = async(req, res) => {
    try {
        const layanan = await Layanan.findAll({
            include: {
                model: Dokter,
                as: 'dokter'
            }
        })

        res.status(200).json({
            message: 'success',
            data: {layanan}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const getLayananById = async(req, res) => {
    const {id} = req.params
    try {
        const layanan = await Layanan.findOne({
            where: {id: id},
            include: {
                model: Dokter,
                as: 'dokter'
            }
        })

        res.status(200).json({
            message: 'success',
            data: {layanan}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const addLayanan = async(req, res) => {
    const {
        nama, biaya, deskripsi, gambar
    } = req.body

    try {
        const newLayanan = await Layanan.create({
            nama, biaya, deskripsi, gambar
        })
        
        res.status(201).json({
            message: 'success add Layanan',
            data: {newLayanan}
        });
    } catch(err){
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const editLayanan = async(req, res) => {
    const { id } = req.params;
    const { 
        nama, biaya, deskripsi, gambar
     } = req.body;
    
    try {
        const updateLayanan = await Layanan.findOne({
            where: { 
                id: id
            },
        })
      
        if (!updateLayanan) {
            return res.status(400).json({
                message: `Layanan dengan id ${id} tidak ditemukan`
            });
        }

        updateLayanan.nama = nama
        updateLayanan.biaya = biaya
        updateLayanan.deskripsi = deskripsi
        updateLayanan.gambar = gambar
        const updateData = await updateLayanan.save()
        
        return res.status(200).json({
            message:"Layanan was updated",
            data: {updateData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const deleteLayanan = async(req, res) => {
    const {id} = req.params

    try {
        const deleteLayanan = await Layanan.findOne({
            where: {id: id},
        })
    
        if (!deleteLayanan) {
            return res.status(400).json({
                message:`Layanan dengan id ${id} tidak ditemukan`,
            });
        }
        const deleteData = await deleteLayanan.destroy()
        return res.status(200).json({
            message:"Layanan was deleted",
            data: {deleteData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

module.exports = {
    getAllLayanan,
    getLayananById,
    addLayanan,
    deleteLayanan,
    editLayanan
}