'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DokterLayanan extends Model {
    
    static associate() {

    }
    
  }
  DokterLayanan.init({
    idDokter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idLayanan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'dokterLayanan',
    modelName: 'DokterLayanan',
  });
  return DokterLayanan;
};