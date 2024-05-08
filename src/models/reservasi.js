'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservasi extends Model {
    
    static associate({User, Dokter, Jadwal, Layanan}) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'idUser',
        as: 'user',
      })

      this.belongsTo(Dokter, {
        foreignKey: 'idDokter',
        as: 'dokter'
      })

      this.belongsTo(Jadwal, {
        foreignKey: 'idJadwal',
        as: 'jadwal'
      })

      this.belongsToMany(Layanan, {
        through: 'reservasiLayanan',
        foreignKey: 'idReservasi',
      })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  Reservasi.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    jenisPembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'jenisPembayaran tidak boleh null' },
        notEmpty: { msg: 'jenisPembayaran tidak boleh kosong' },
      },
    },
    statusPembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'statusPembayaran tidak boleh null' },
        notEmpty: { msg: 'statusPembayaran tidak boleh kosong' },
      },
    },
    keluhan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'keluhan tidak boleh null' },
        notEmpty: { msg: 'keluhan tidak boleh kosong' },
      },
    },
  }, {
    sequelize,
    tableName: 'reservasi',
    modelName: 'Reservasi',
  });
  return Reservasi;
};