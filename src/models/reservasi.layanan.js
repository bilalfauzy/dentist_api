'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReservasiLayanan extends Model {
    
    static associate() {

    }
    
  }
  ReservasiLayanan.init({
    idReservasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idLayanan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'reservasiLayanan',
    modelName: 'ReservasiLayanan',
  });
  return ReservasiLayanan;
};