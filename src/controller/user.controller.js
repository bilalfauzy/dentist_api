const {User, Reservasi} = require('../models')

const getAllUser = async(req, res) => {
    try {
        const user = await User.findAll({
            include: {
                model: Reservasi,
                as: 'reservasi'
            }
        })

        res.status(200).json({
            message: 'success',
            data: {user}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const getUserById = async(req, res) => {
    const {id} = req.params
    try {
        const User = await User.findOne({
            where: {id: id},
            include: {
                model: Reservasi,
                as: 'reservasi'
            }
        })

        res.status(200).json({
            message: 'success',
            data: {User}
        });
      } catch (err) {
        
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const editUser = async(req, res) => {
    const { id } = req.params;
    const { 
        nama, userName, email, password,
        nomorWa, umur, gender, foto
     } = req.body;
    
    try {
        const updateUser = await User.findOne({
            where: { 
                id: id
            },
        })
      
        if (!updateUser) {
            return res.status(400).json({
                message: `User dengan id ${id} tidak ditemukan`
            });
        }
        
        updateUser.nama = nama
        updateUser.userName = userName
        updateUser.email = email
        updateUser.password = password
        updateUser.nomorWa = nomorWa
        updateUser.umur = umur
        updateUser.gender = gender
        updateUser.foto = foto
        const updateData = await updateUser.save()
        
        return res.status(200).json({
            message:"User was updated",
            data: {updateData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

const deleteUser = async(req, res) => {
    const {id} = req.params

    try {
        const deleteUser = await User.findOne({
            where: {id: id},
        })
    
        if (!deleteUser) {
            return res.status(400).json({
                message:`User dengan id ${id} tidak ditemukan`,
            });
        }
        const deleteData = await deleteUser.destroy()
        return res.status(200).json({
            message:"User was deleted",
            data: {deleteData}
        });
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err.message}`
        });
    }
}

module.exports = {
    getAllUser,
    getUserById,
    deleteUser,
    editUser
}