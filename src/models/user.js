'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate({Reservasi}) {
      // define association here
      this.hasMany(Reservasi, {
        foreignKey: 'idUser',
        as: 'reservasi',
      })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  User.init({
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
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a name' },
        notEmpty: { msg: 'Name must not be empty' },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: 'email must not be empty' },
        isEmail: { msg: 'Must be a valid email address' },
      },
    },
    role: {
      type: DataTypes.ENUM('admin', 'pasien'),
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a role' },
        notEmpty: { msg: 'role must not be empty' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password tidak boleh null' },
        notEmpty: { msg: 'Password tidak boleh kosong' },
      },
    },
    nomorWa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Nomor wa tidak boleh null' },
        notEmpty: { msg: 'Nomor wa tidak boleh kosong' },
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
    gender: {
      type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
      allowNull: false,
      validate: {
        notNull: { msg: 'Umur tidak boleh null' },
        notEmpty: { msg: 'Umur tidak boleh kosong' },
      },
    },
    foto: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};