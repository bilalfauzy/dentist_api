'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    
    static associate({Reservasi, Jadwal, Layanan}) {
      // define association here
      this.hasMany(Reservasi, {
        foreignKey: 'idDokter',
        as: 'reservasi'
      })
      this.hasMany(Jadwal, {
        foreignKey: 'idDokter',
        as: 'jadwal'
      })
      this.belongsToMany(Layanan, {
        through: 'dokterLayanan',
        foreignKey: 'idDokter'
      })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  Dokter.init({
    uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Nama tidak boleh null' },
        notEmpty: { msg: 'Nama tidak boleh kosong' },
      },
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Umur tidak boleh null' },
        notEmpty: { msg: 'Umur tidak boleh kosong' },
      },
    },
    spesialis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Spesialis tidak boleh null' },
        notEmpty: { msg: 'Spesialis tidak boleh kosong' },
      },
    },
    gender: {
      type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
      allowNull: false,
      validate: {
        notNull: { msg: 'Umur tidak boleh null' },
        notEmpty: { msg: 'Umur tidak boleh kosong' },
      },
    },
    review: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    foto: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    tableName: 'dokter',
    modelName: 'Dokter',
  });
  return Dokter;
};