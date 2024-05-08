'use strict';
/** @type {import('DataTypes-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('reservasi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      idUser: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      idDokter: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      idJadwal: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      jenisPembayaran: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      statusPembayaran: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      keluhan: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
    
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('reservasi');
  }
};