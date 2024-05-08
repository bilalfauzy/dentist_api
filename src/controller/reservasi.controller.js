const {Reservasi, User, Layanan, Dokter, Jadwal} = require('../models')

const getAllReservasi = async(req, res) => {
    try {
        const reservasi = await Reservasi.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                },
                {
                    model: Dokter,
                    as: 'dokter',
                },
                {
                    model: Jadwal,
                    as: 'jadwal',
                },
                {
                    model: Layanan,
                    as: 'layanan',
                },
            ]
        })

        res.status(200).json({
            message: 'success',
            data: {reservasi}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const getReservasiById = async(req, res) => {
    const {id} = req.params
    try {
        const reservasi = await Reservasi.findOne({
            where: {id: id},
            include: [
                {
                    model: User,
                    as: 'user',
                },
                {
                    model: Dokter,
                    as: 'dokter',
                },
                {
                    model: Jadwal,
                    as: 'jadwal',
                },
                {
                    model: Layanan,
                    as: 'layanan',
                },
            ]
        })

        res.status(200).json({
            message: 'success',
            data: {reservasi}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const addReservasi = async(req, res) => {
    const {
        idUser, idDokter, idJadwal,
        jenisPembayaran, statusPembayaran, keluhan
    } = req.body

    try {
        const newReservasi = await Reservasi.create({
            idUser, idDokter, idJadwal,
            jenisPembayaran, statusPembayaran, keluhan
        })
        
        res.status(201).json({
            message: 'success add Reservasi',
            data: {newReservasi}
        });
    } catch(err){
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}


const deleteReservasi = async(req, res) => {
    const {id} = req.params

    try {
        const deleteReservasi = await Reservasi.findOne({
            where: {id: id},
        })
    
        if (!deleteReservasi) {
            return res.status(400).json({
                message:`Reservasi dengan id ${id} tidak ditemukan`,
            });
        }
        const deleteData = await deleteReservasi.destroy()
        return res.status(200).json({
            message:"Reservasi was deleted",
            data: {deleteData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

module.exports = {
    getAllReservasi,
    getReservasiById,
    addReservasi,
    deleteReservasi
}