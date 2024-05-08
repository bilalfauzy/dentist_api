'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Layanan extends Model {
    
    static associate({Dokter, Reservasi}) {
      // define association here
      this.belongsToMany(Dokter, {
        through: 'dokterLayanan',
        foreignKey: 'idLayanan',
      })

      this.belongsToMany(Reservasi, {
        through: 'reservasiLayanan',
        foreignKey: 'idLayanan',
      })

    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  Layanan.init({
    uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Nama layanan tidak boleh null' },
        notEmpty: { msg: 'Nama layanan tidak boleh kosong' },
      },
    },
    biaya: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Biaya tidak boleh null' },
        notEmpty: { msg: 'Biaya tidak boleh kosong' },
      },
    },
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'deskripsi tidak boleh null' },
        notEmpty: { msg: 'deskripsi tidak boleh kosong' },
      },
    },
    gambar: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    tableName: 'layanan',
    modelName: 'Layanan',
  });
  return Layanan;
};