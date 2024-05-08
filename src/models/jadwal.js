'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    
    static associate({Reservasi, Dokter}) {
      // define association here
      this.hasOne(Reservasi, {
        foreignKey: 'idJadwal'
      })
      this.belongsTo(Dokter, {
        foreignKey: 'idDokter',
        as: 'dokter'
      })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  Jadwal.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    hari: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Hari tidak boleh null' },
        notEmpty: { msg: 'Hari tidak boleh kosong' },
      },
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: 'Tanggal tidak boleh null' },
        notEmpty: { msg: 'Tanggal tidak boleh kosong' },
      },
    },
    jam: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Jam tidak boleh null' },
        notEmpty: { msg: 'Jam tidak boleh kosong' },
      },
    },
    status: {
      type: DataTypes.ENUM('Tersedia', 'Kosong'),
      allowNull: false,
      validate: {
        notNull: { msg: 'Status tidak boleh null' },
        notEmpty: { msg: 'Status tidak boleh kosong' },
      },
    },
  }, {
    sequelize,
    tableName: 'jadwal',
    modelName: 'Jadwal',
  });
  return Jadwal;
};